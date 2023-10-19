import { useState } from 'react'
import { Perfil } from './componente/Perfil'
import './App.css'
import { Nombre } from './componente/Nombre'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <Perfil></Perfil>
        <Nombre></Nombre>
        <Iconos></Iconos>


      </div>
       
    </>
  )
}

export default App
