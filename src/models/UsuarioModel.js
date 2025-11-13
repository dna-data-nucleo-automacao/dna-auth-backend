import { collection, query, where, getDocs } from 'firebase/firestore';
import FirebaseConfig from '../config/firebaseConfig';

export default class Usuario{
  constructor(){
    const firebase = new FirebaseConfig();
    this.db = firebase.getDb();
    this.collectionRef = collection(this.db, "USUARIO");
  }

  async getById(id){
    try{
      const ref = doc(this.db, "USUARIO", id);
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

  async getByCPF(cpf){
    try{
      const q = query(this.collectionRef, where("cpf", "==", cpf));
      const snap = await getDocs(q);

      if(snap.empty){
        return null;
      }

      return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    } catch(e){
      console.log("Erro ao buscar usuário. ", e);
      throw e;
    }
  }
}
