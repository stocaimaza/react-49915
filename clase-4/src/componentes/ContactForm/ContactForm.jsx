import { useState} from "react";
import emailjs from "emailjs-com"; 

const ContactForm = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState(""); 

    const enviarMensaje = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: nombre,
            from_email: email,
            message: mensaje
        }; 

        //Nuestro ID tiene que ser el public: 
        emailjs.send("service_u1gkgkc", "template_fr87xt6", templateParams, "vOMdVfKVFpLJXPbMO")
            .then((respuesta) => {
                console.log("Mensaje enviado", respuesta.status)
            })
            .catch((error) => {
                console.log("Error al enviar", error)
            })

        setNombre("");
        setEmail("");
        setMensaje("");
    }


  return (
    <form onSubmit={enviarMensaje}>

        <label htmlFor="">Nombre: </label>
        <input type="text" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
        <br /><br />

        <label htmlFor="">Email: </label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <br /><br />

        <label htmlFor="">Mensaje: </label>
        <textarea  cols="30" rows="10" onChange={(e) => setMensaje(e.target.value)} value={mensaje}></textarea>
        <br /><br />

        <button type="submit"> Enviar Mensaje </button>

    </form>
  )
}

export default ContactForm