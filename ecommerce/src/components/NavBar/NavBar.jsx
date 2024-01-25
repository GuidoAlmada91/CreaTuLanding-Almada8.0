import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav>
            <h3>Almendro</h3>
            <div>
                <button>Frutos Secos</button>
                <button>Aceites</button>
                <button>Mixs</button>
                <button>Otros</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar