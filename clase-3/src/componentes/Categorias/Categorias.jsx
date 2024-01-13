import { useState, useEffect } from "react";

const Categorias = () => {
    const [categoria, setCategoria] = useState("Comida");

    useEffect( ()=> {
        document.title = `Categoria ${categoria}`;
    }, [categoria])

    //Si dejamos el array de dependencias vacio, la funcion que pasamos como primer argumento solo se ejecuta cuando se monta el componente. 

    //Función manejadora de categorias: 
    const manejadorCategoria = (categoria) => {
        setCategoria(categoria);
    }

  return (
    <div>
        <h2>Categorias de Productos </h2>
        
        <button onClick={()=> manejadorCategoria("Frutas")}> Frutas </button>
        <button onClick={()=> manejadorCategoria("Carnes")}> Carnes </button>
        <button onClick={()=> manejadorCategoria("Lacteos")}> Lacteos </button>
        <button onClick={()=> manejadorCategoria("Limpieza")}> Limpieza </button>
    </div>
  )
}

export default Categorias