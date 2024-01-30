import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/Navbar/navBar'
import "./Navbar.css"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemCount from './components/itemCount/itemCount'
import Item from './components/Item/Item'


function App() {
  return(
    <div className='App'>
    <NavBar>
    </NavBar>
    <ItemListContainer greeting={'Suvica, Libreria y computacion'}/>
    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada: ', quantity)}/>
    
    </div>
  )

    
}

export default App;
