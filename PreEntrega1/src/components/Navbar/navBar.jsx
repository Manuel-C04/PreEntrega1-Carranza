import CartWidget from "../CartWidget/CartWidget"
const NavBar = () =>{
    return(
    <nav>
        <h1>Suv<span>ica</span></h1>
        <div className="categories">
            <a href="">Resmas</a>
            <a href="">Abrochadoras </a>
            <a href="">Rollos termicos</a>
            <a href="">Cuadernos</a>
        </div>
           <CartWidget />
    </nav>
    )
}

export default NavBar