import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Personagens from './pages/Personagens'
import { useState } from 'react'

function App() {
  const [pagina, setPagina] = useState('Home')

  const renderizarPagina = () => {
    if (pagina === 'Home') return <Home />
    if (pagina === 'Personagens') return <Personagens />
    if (pagina === 'Sobre') return <Sobre />
  }

  return (
    <div className="container">
      <h1>I Want to Eat Your Pancreas</h1>

      <nav>
        <button onClick={() => setPagina('Home')}>Home</button>
        <button onClick={() => setPagina('Personagens')}>Personagens</button>
        <button onClick={() => setPagina('Sobre')}>Curiosidades</button>
      </nav>

      <div>
        {renderizarPagina()}
      </div>
    </div>
  )
}

export default App