import './App.css'
import Registro from './components/Registro.jsx'
import Generador from './components/Generador.jsx'
import { useState } from 'react'


function App() {

  const[UI, setUI] = useState(true)
  const[user, setUser] = useState('')

  return (
    <div className='App'>
      <header>
        <img className='X' src={require('../src/img/Logo.png')} alt="Logo"/>
        <img className='exodo' src={require('../src/img/exodo.png')} alt="Exodo"/>
      </header>
      { UI ? <Registro setUI={setUI} setUser={setUser}/> : <Generador setUI={setUI} setUser={setUser} user={user}/> }
    </div>
  )
}

export default App
