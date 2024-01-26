import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav>
            <h3 className="almendro">Almendro</h3>
            <div className="menu">
                <button>FRUTOS SECOS</button>
                <button>ACEITES</button>
                <button>MIXS</button>
                <button>OTROS</button>
            </div>
            <div className="carrito">
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar