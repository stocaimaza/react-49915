import { useState, useEffect } from "react";
//Importamos los hooks que necesitamos. 

//Importamos las funciones que vamos a utilizar de Firebase: 
import { getDocs, collection, query, where, doc, updateDoc } from "firebase/firestore";
//getDocs me permite obtener todos los documentos de una collection. 
//collection me permite obtener una colección. 
//query me permite hacer una consulta. 

//Importamos el objeto que tiene mi conexión a la BD: 
import { db } from "../../services/config";


const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        //Si quisiera filtrar productos puedo usar "where"
        //const misProductos = query(collection(db, "productos"), where("precio", "<", 10000));
        const misProductos = query(collection(db, "productos"));

        getDocs(misProductos)
            .then(respuesta => {
                setProductos(respuesta.docs.map(doc => ({ id: doc.id, ...doc.data() })))
                //Creo un array que contenga los datos del producto y ademas el ID. 
            })
    }, [productos])

    //MODIFICACIÓN: Voy a descontar stock cada vez que hago click en "Comprar". 

    const descontarStock = async(producto) => {
        const productoRef = doc(db, "productos", producto.id); 
        const nuevoStock = producto.stock - 1; 

        await updateDoc(productoRef, {stock: nuevoStock});

        //Actualizar la lista de productos después de descontar: 
        const productosActualizados = productos.map( (p) => {
            if(p.id === producto.id) {
                return {...p, stock: nuevoStock};
            }
            return p;
        })
        setProductos(productosActualizados);
    }


    return (
        <div>
            <h2>Mis productos</h2>
            <div className="productos-container">
                {
                    productos.map(producto => (
                        <div>
                            <h3> {producto.nombre} </h3>
                            <p> Precio: {producto.precio} </p>
                            <p> Stock: {producto.stock} </p>
                            <button onClick={() => descontarStock(producto) }> Comprar </button>
                        </div>
                    ))

                }
            </div>

        </div>
    )
}

export default Productos