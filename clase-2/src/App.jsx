
import TituloPrincipal from './componentes/TituloPrincipal/TituloPrincipal';
import ItemCount from './componentes/ItemCount/ItemCount';
import Mensaje from './componentes/Mensaje/Mensaje';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

//Los componentes los nombramos con PascalCase.

//Componentes 1: 

//Definición: conjunto de elementos que cumplen una función especifica en la Interfaz del Usuario. 

//Ventaja de trabajar con componentes: 

//- Reutilizamos código. 
//- Favorece la separación de responsabilidades. 
//- Es más fácil de entender. 
//- Mejora el rendimiento de la Aplicación. 

//Caracteristicas principales: 

//1 - Van a renderizar un único elemento. 
//2 - Pueden recibir props. (propiedades).
//3 - Pueden tener un estado.

//¿Que es el estado? 
//Es un objeto que contiene información del componente que puede cambiar durante la ejecución de la App. 

//Hooks: son funciones de la librería que nos ayudan a manipular el estado. 

const App = () => {

  return (
    <div>
        {/* <TituloPrincipal saludo="Hola comision de los sabados" curso="React" />
        <hr />
        <ItemCount/>
        <hr />
        <Mensaje/> */}
        <NavBar/>
        <ItemListContainer greeting="Hola Mundo"/>

    </div>
  )
}

export default App