import { useState, useEffect } from "react";


//https://jsonplaceholder.typicode.com/users

const JsonPlaceHolder = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        //Trabajamos con fetch: 

        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then(res => res.json())
        //     .then(data => setUsuarios(data))
        //     .catch(error => console.log(error))

        //Trabajamos con Async- Await: 

        //Puedo usar el try catch que me permite manejar un error. Si algo adentro del try falla, el código continua por el catch. 

        // try {
        //     const pedirUsuarios = async () => {
        //         const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
        //         const data = await respuesta.json();
        //         setUsuarios(data);
        //     }

        //     pedirUsuarios();

        // } catch (error) {
        //     console.log("Error al conectarme con JSON", error);
        // }

        const pedirUsuarios = async () => {
            const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await respuesta.json();
            setUsuarios(data);
        }

        pedirUsuarios();

    }, [])


    return (
        <div>
            <h2> Usuarios de JSONPlaceHolder</h2>
            <ul>
                {
                    usuarios.map(usuario => {
                        return (
                            <li key={usuario.id}> {usuario.name} </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default JsonPlaceHolder