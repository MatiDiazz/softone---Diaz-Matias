import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget' 

const NavBar =() =>{
    return(
        <nav className="menu">
           <h1>Logo</h1>
            <h1>SoftOne</h1>
            <div>
                <button>Computadoras</button>
                <button>Celulares</button>
                <button>Gamers</button>
                <button>Wearables </button>
                <button>Sign in</button>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar
