import './TituloPrincipal.css'

const TituloPrincipal = ({saludo, curso}) => {
  return (
    <>
        <h1 style={{color:"red"}} >Bienvenidos a la clase 2 </h1>
        <h2 className='titulo'>Ya casi nos vamos a comer</h2>
        <p className='titulo'> {saludo} </p>
        <strong> {curso} </strong>
    </>
    
  )
}

export default TituloPrincipal