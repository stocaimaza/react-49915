import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./componentes/NavBar/NavBar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}  />
          <Route path="/item/:idItem" element={<ItemDetailContainer/>}  />
          <Route path="/cart" element={<h2>En breve tendras tu carrito rata de dos patas!!</h2>} />
        </Routes>
      </BrowserRouter>
      

      
    </div>
  )
}

export default App