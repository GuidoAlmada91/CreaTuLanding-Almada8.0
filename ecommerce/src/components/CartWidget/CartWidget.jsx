import cart from "./assets/Carrito.png"

const CartWidget = () => {
    return (
        <div className="conedorcarrito2">
            <img className="carrito" src={cart} alt="cart-widget"></img>
            <p className="numeroCarrito">0</p>

        </div>
    )
}

export default CartWidget 