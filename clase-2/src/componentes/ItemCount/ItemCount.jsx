//Para poder crear un estado necesito un hook. 

//1) Primero tengo que importarlo: useState. 

import { useState } from "react";

//2) Segundo, useState me retorna una array con dos elementos. El primero es el estado, el segundo es una función que me actualiza el estado. 

const ItemCount = () => {
    const [contador, setContador] = useState(1);

    //3) Creamos las funciones para aumentar el contador y disminuir. 

    let stock = 10;

    const incrementar = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if(contador > 1){
            setContador(contador - 1);
        }
    }

  return (
    <>
        <button onClick={decrementar}> - </button>
        <p> {contador} </p>
        <button onClick={incrementar}> + </button>
    </>
  )
}

//Incrementar y decrementar van sin parentesis porque sino se ejecutarían al momento de rederizar el componente. Y solo queremos que se ejecute cuando el visitante haga click en los botones. 

export default ItemCount