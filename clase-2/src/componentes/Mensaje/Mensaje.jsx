import { useState } from "react";

const Mensaje = () => {
    const [mostrar, setMostrar] = useState(false);
    //Valor inicial del estado = false.

    const manejadorMostrar = () => {
        setMostrar(!mostrar);
    }


  return (
    <div>
        <button onClick={manejadorMostrar}> {mostrar ? "Ocultar" : "Mostrar"} </button>
        
        {mostrar && <h2>Aguante el useState</h2>}
    </div>
  )
}

export default Mensaje