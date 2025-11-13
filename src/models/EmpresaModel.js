import { doc, getDoc } from 'firebase/firestore';
import FirebaseConfig from '../config/firebaseConfig';

export default class Empresa{
  constructor(){
    const firebase = new FirebaseConfig();
    this.db = firebase.getDb();
  }

  async getById(id){
    try{
      const ref = doc(this.db, "EMPRESA", id);
      const snap = await getDoc(ref);

      if(!snap.exists()){
        return null;
      }

      return {id: snap.id, ...snap.data()};
    } catch(e){
      console.log("Erro ao buscar usuário. ", e);
      throw e;
    }
  }
}