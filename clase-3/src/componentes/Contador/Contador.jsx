import { useState, useEffect } from "react";

//1) Voy a importar el useEffect. 

//El efecto primario de React es renderizar componentes, manipulando el DOM. 

//Peeero, una Aplicación Web tiene que hacer mucho más que solo mostrarse, tiene que realizar operaciones, consumir datos de servidores, usar eventos. 

//Para poder manipular esos efectos secundarios de los cambios de estado vamos a usar useEffect. 

const Contador = () => {
    const [contador, setContador] = useState(1);
    const [color, setColor] = useState("black");

    useEffect(()=> {
        //Acá voy a colocar la lógica para cambiar el titulo de la página. 
        document.title = `Contador: ${contador}`;

        //Y si cuando el contador llega a 5 me cambia el color del boton? 
        //¿Como lo harian? 
        // if(contador === 5) {
        //     document.getElementById("boton").style.color = "red";
        // }

        //Esto no es lo mas recomendado porque estoy accediendo directamente al DOM. Y no se considera una buena practica en React. 

        //Mejor es delegar el trabajo con el DOM a React: 

        if( contador > 5) {
            setColor("red");
        } else {
            setColor("black");
        }


    }, [contador])

    const sumarContador = () => {
        setContador(contador + 1);
    }

    const restarContador = () => {
        setContador(contador - 1);
    }

  return (
    <div>
        <button onClick={restarContador}> - </button>
        <p> {contador} </p>
        <button onClick={sumarContador}> + </button>

        <button id="boton" style={{color: color}}> Agregar al Carrito </button>
    </div>
  )
}

export default Contador