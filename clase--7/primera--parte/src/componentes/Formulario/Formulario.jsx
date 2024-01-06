import { useState } from "react"; 
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
//1) Importamos hooks y funciones necesarias. 


const Formulario = () => {
    const [nombre, setNombre] = useState(""); 
    const [apellido, setApellido] = useState(""); 
    const [telefono, setTelefono] = useState("");
    //2) Creamos los estados para almacenar los datos del form. 

    //3) Creamos una función manejadora del formulario. 

    const manejadorFormulario = (e) => {
        e.preventDefault(); 

        addDoc(collection(db, "usuarios"), {
            nombre:nombre, 
            apellido: apellido, 
            telefono: telefono
        })

        setNombre("");
        setApellido("");
        setTelefono(""); 

    }



  return (
    <form onSubmit={manejadorFormulario}>
        <h2>Formulario de Clientes</h2>
        <label htmlFor=""> Nombre </label>
        <input type="text" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
        <br /><br />

        <label htmlFor=""> Apellido </label>
        <input type="text" onChange={(e) => setApellido(e.target.value) } value={apellido} />
        <br /><br />

        <label htmlFor=""> Celular </label>
        <input type="text" onChange={(e) => setTelefono(e.target.value)} value={telefono}/>
        <br /><br />

        <button type="submit"> Enviar </button>
    </form>
  )
}

export default Formulario