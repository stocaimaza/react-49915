/*
COMPONENTES 2: 

Las props son objetos, con información que le pasan los componentes padres a los componentes hijitos. 
Es importante aclarar que el flujo de información es UNIDIRIRECCIONAL, solamente los padres le van a pasar info a los hijitos. 

¿Que tipos de datos podemos pasar? 

- Datos primitivos. 
- Objetos y arreglos. 
- Funciones. 

y se suman ahora... LOS CHILDREN. 

Esta es una forma de pasar otros componentes o elementos como props. 

CICLOS DE VIDA DE LOS COMPONENTES: Es una serie de estados por los cuales pasa todo componente a lo largo de su existencia

- MONTAJE (ingresa el componente al DOM). 
- ACTUALIZACION (Actualizo el valor del contador).
- DESMONTAJE (Eliminamos este componente). 

*/

import Articulos from "./componentes/Articulos/Articulos";
import Contador from "./componentes/Contador/Contador";
import UtilizamosUseRef from "./componentes/UtilizamosUseRef/UtilizamosUseRef";
import Categorias from "./componentes/Categorias/Categorias";
import Promesas from "./componentes/Promesas/Promesas";
import Map from "./componentes/Map/Map";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <div>
      <h1>Bienvenidos a la clase 3</h1>
      {/* <Articulos img="https://placekitten.com/200/287" titulo="Los juegos favoritos de los gatos"/>

      <Articulos img="https://placekitten.com/408/287" titulo="controle medicos del gatito">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet animi ea similique minus illum saepe asperiores laborum tenetur magnam repellat nisi, earum esse amet magni officiis! Aliquid aperiam iure exercitationem.</p>
        <strong>Tiempo de lectura: 3 minutos</strong>
      </Articulos> 
      <Contador/>
      <hr />
      <br />
      <UtilizamosUseRef/>
      <hr />
      <br />
      <Categorias/>
      <Promesas/>
      <br /><br />
      <Map/>
      */}
      <ItemListContainer/>
    </div>
  )
}

export default App