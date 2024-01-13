
//import AsyncAwait from './componentes/AsyncAwait/AsyncAwait';
//import JsonPlaceHolder from './componentes/JsonPlaceHolder/JsonPlaceHolder';
//import Simpsons from './componentes/Simpsons/Simpsons';
//import Nesflics from './componentes/Nesflics/Nesflics';



/* CLASE 4 - Consumiendo Apis && Workshop */

//Modelo Cliente - Servidor. 
//Push 
//Pooling

import ContactForm from "./componentes/ContactForm/ContactForm";
import UsamosCustomHooks from "./componentes/UsamosCustomHooks/UsamosCustomHooks";
import Patrones from "./componentes/Patrones/Patrones";
import Mensaje from "./componentes/Patrones/Mensaje";
import { mensajeConTitulo, conAumento } from "./componentes/Patrones/Patrones";
import Producto from "./componentes/Patrones/Producto";

const App = () => {
  const NuevoComponente = mensajeConTitulo(Mensaje);
  const NuevoProducto = conAumento(Producto);

  return (
    <div>

      <Patrones/>
      <NuevoComponente />
      <NuevoProducto nombre="Tomate" precio={100} />

    </div>
    
  )
}

export default App


/*

Practicas de hoy: 


<AsyncAwait/>
<JsonPlaceHolder/>
<Simpsons/> 
<Nesflics/>
<ContactForm/>
<UsamosCustomHooks />


*/