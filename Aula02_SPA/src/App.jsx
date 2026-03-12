import Home from './pages/Home'
import Contatos from './pages/Contatos'
import Sobre from './pages/Sobre'
import { useState } from 'react'

function App(){
  
  const [pagina, setPagina] = useState('Home')

  const renderizarPagina = ()=>{
    if (pagina === 'Home') return <Home/>
    if (pagina === 'Contatos') return <Contatos/>
    if (pagina === 'Sobre') return <Sobre/>
  }
  
  return(
    <div className="container">
      <h1>Meu Site SPA</h1>
      <nav>
        <button onClick={()=>setPagina('Home')}>Home</button>
        <button onClick={()=>setPagina('Sobre')}>Sobre</button>
        <button onClick={()=>setPagina('Contatos')}>Contatos</button>
      </nav>

      <div className='conteudo'>
        {renderizarPagina()}
      </div>
    </div>
  )
}

export default App