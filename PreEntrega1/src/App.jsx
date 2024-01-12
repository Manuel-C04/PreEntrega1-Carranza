import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/Navbar/navBar'
import "./Navbar.css"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return(
    <div className='App'>
    <NavBar>
      
    </NavBar>
    <ItemListContainer greeting={'Suvica, Libreria y computacion'}/>
    
    </div>
  )

    
}

export default App;
