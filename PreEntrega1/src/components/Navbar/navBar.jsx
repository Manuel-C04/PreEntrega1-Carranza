import CartWidget from "../CartWidget/CartWidget"
import {NavLink, Link} from 'react-router-dom'
const NavBar = () =>{
    return(
    <nav>
        <h1>Suv<span>ica</span></h1>
        <div className="categories">
            <NavLink to={`/category/Abrocahdoras`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Abrochadoras </NavLink>
            <NavLink to={`/category/Cuadernos`}  className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cuadernos</NavLink>
        </div>
           <CartWidget />
    </nav>
    )
}

export default NavBar