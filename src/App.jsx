import { useState } from 'react'
import './App.css'

import NavBar     from './components/NavBar/NavBar.jsx'
import './components/Logo/Logo.css' 
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/CartWidget/CartWidget.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  
  return (
    <>
      <NavBar />
      <ItemListContainer greeting='Bienvenidos' />
    </>
  )
}

export default App
