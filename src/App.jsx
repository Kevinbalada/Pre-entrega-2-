import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'



const App = () => {
  return (
      <>
        <NavBar/>
        <ItemListContainer
        greeting="Bienvenidos a mi tienda" 
        />
    </>
    )
  }

  export default App

  

