//UseRef es un hook que me permite crear una referencia mutable que puede ser actualizada sin provocar una nueva renderización del componente. 
import { useRef } from "react";


const UtilizamosUseRef = () => {
    const contadorCarrito = useRef(0);
    //Este hook me retorna un objeto con una propiedad llamada "current" la cual podemos mutar.
    
    const agregarAlCarrillo = () => {
        contadorCarrito.current = contadorCarrito.current + 1;
        console.log(contadorCarrito.current);
    }

  return (
    <div>
        <p>Productos Marolio en el carrito: {contadorCarrito.current} </p>
        <button onClick={agregarAlCarrillo}> Agregar mas marolio! </button>
    </div>
  )
}

export default UtilizamosUseRef