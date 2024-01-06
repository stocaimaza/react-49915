import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 
//Vamos a importar dos funciones del módulo Firebase. 
//initializeApp = la voy a usar para INICIAR LA CONEXIÓN CON FIREBASE. 
//getFirestore = se utiliza para obtener una instancia de Firestore. 

//Este es un objeto con toda nuestra información de la cuenta. 
//Acá se incluye la key personal de acceso al BD. 
const firebaseConfig = {
  apiKey: "AIzaSyDFp9mZwvvwkrQjtQTmM-B9D5PZkJcGhSc",
  authDomain: "marolio-forever.firebaseapp.com",
  projectId: "marolio-forever",
  storageBucket: "marolio-forever.appspot.com",
  messagingSenderId: "471106468556",
  appId: "1:471106468556:web:b14395f50013cfb6eaa069"
};

// Inicializamos Firebase y se pasa la configuración como argumento. Esto devuelve una instancia de Firebase. 
const app = initializeApp(firebaseConfig);

//Ahora uso esa instancia para obtener el servicio de Firestore: 

export const db = getFirestore(app); 
//No se olviden de exportarla asi esta disponible en toda nuestra aplicación. 