/*

Programación sincronica y asincronica. 

La programacion sincronica ejecuta una tarea a la vez, en orden secuencial. Cada proceso es bloqueante del siguiente. 

La programacion asincronica ejecuta varias tareas al mismo tiempo, en orden no secuencial 

Para "simular" la conexion a un servidor y el retraso que existe en la respuesta usamos setTimeout.

Promesas: un objeto que tambien representa un evento futuro. 
En general este evento futuro es el resultado de alguna peticion asincronica. 

Las promesas tienen 3 estados posibles: 
Pendiente
Cumplida
Rechazada




*/

const Promesas = () => {
    //Programacion Sincronica: 

    console.log("Tarea 1");
    console.log("Tarea 2");

    //Programacion asincronica: 

    setTimeout(()=> {
        console.log("Tarea A");
    }, 3000);

    setTimeout(()=>{
        console.log("Tarea B");
    }, 1500)

    //Promesas: 

    const falsasPromesas = (estado) => {
        return new Promise((resolve, reject) => {
            if(estado) {
                resolve("Promesa cumplida, me llego el karting!");
            } else {
                reject("Promesa rechazada, los odio a todos!!");
            }
        })
    }

    //console.log(falsasPromesas());

    //THEN y CATCH: 
    //Podemos concatenar dos métodos que me permiten ejecutar una función cuando la promesa se cumple o se rechaza. 
    //THEN se ejecuta cuando la promesa se cumple.
    //CATCH se ejecuta cuando la promesa se rechaza. 
    //FINALLY se ejecuta siempre. 

    falsasPromesas(false)
        .then(respuesta => {
            console.log("Sii me voy a correr en karting!!" + respuesta);
        })
        .catch(error => {
            console.log("Los odio profundamente " + error );
        })
        .finally(()=> console.log("Proceso terminado"))

  return (
    <div>Promesas</div>
  )
}

export default Promesas