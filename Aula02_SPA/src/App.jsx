import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Personagens from './pages/Contatos'
import { useState } from 'react'

function App(){
  const [pagina, setPagina] = useState('Home')

  const renderizarPagina = ()=>{
    if(pagina === 'Home') return <Home/>
    if(pagina === 'Sobre') return <Sobre/>
    if(pagina === 'Contatos') return <Personagens/>
  }
 
  return(
    <div className="container">
     <h1> I Want to Eat Your Pancreas</h1>
<p>Uma história sobre vida, amizade e despedidas </p>
      <nav>
        <button onClick={()=>setPagina('Home')}>Home</button>
        <button onClick={()=>setPagina('Contatos')}>Personagens</button>
        <button onClick={()=>setPagina('Sobre')}>Sobre</button>
      </nav>
      <div>
        {renderizarPagina()}
      </div>
    </div>
  )
}

export default App