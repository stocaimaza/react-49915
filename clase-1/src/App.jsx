import React from 'react';
import ProductoCard from './componentes/ProductoCard/ProductoCard';;

const App = () => {
  let profesor = "Samuel";
  let curso = "React";
  
  return (
    <div>
      <h1>Hola, mi profesor es {profesor} </h1>
      <h2>Estoy cursando {curso} </h2>
      <h3>Tengo esta edad {17+1} </h3>
      <hr />
      <ProductoCard/>
    </div>
  )
}

export default App