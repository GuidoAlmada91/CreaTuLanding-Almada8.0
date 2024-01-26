import './App.css'
import React from 'react'
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (

    <div className='App'>
      <Navbar />
      <div className='contenedor-bienvenida'>
        <ItemListContainer greeting={"Bienvenido"} />
      </div>
    </div>

  )
}
export default App
