import cart from './assets/cart.svg'
const CartWidget = () =>{
    return(
        <div className='Cart'>
            <img src={cart} alt="Carrito" />
            <span>0</span>
        </div>
    )
}

export default CartWidget;