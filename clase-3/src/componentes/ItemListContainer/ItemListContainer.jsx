import { useState, useEffect } from "react";
import { getProductos } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import Contador from "../Contador/Contador";


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        getProductos()
            .then(respuesta => {
                setProductos(respuesta)
            })
    }, [])

  return (
    <div>
        <h2>Mis productos</h2>
        <ItemList productos = {productos} />
    </div>
  )
}

export default ItemListContainer