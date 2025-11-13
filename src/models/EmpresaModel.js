import { doc, getDocs, collection, query, where } from 'firebase/firestore';
import FirebaseConfig from '../config/firebaseConfig';

export default class Empresa{
  constructor(){
    const firebase = new FirebaseConfig();
    this.db = firebase.getDb();
    this.collectionRef = collection(this.db, "EMPRESA");
  }

  async getById(id){
    try{
      const ref = doc(this.db, "EMPRESA", id);
      const snap = await getDocs(ref);

      if(!snap.exists()){
        return null;
      }

      return {id: snap.id, ...snap.data()};
    } catch(e){
      console.log("Erro ao buscar empresa. ", e);
      throw e;
    }
  }

  async getByIds(ids){
    try{
      if (!ids || ids.length === 0 ) return [];

      const q = query(this.collectionRef, where("__name__", "in", ids));
      const snap = await getDocs(q);
      return snap.docs.map((d) => ({id: d.id, ...d.data()}));
    } catch(e){
      console.log("Erro ao buscar empresa. ", e);
      throw e;
    }
  }
}
