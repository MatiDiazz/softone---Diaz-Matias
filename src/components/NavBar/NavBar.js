import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget' 
import {link} from 'react-router-dom'

const NavBar =() =>{
    return(
        <nav className="menu">
           <h1>Logo</h1>
            <h1>SoftOne</h1>
            <div>
                <link to="/index"><img className="Log" src = "../img/logo.png"></img></link>
                <link to="/category/notbooks" className='MenuNav'>Notbooks</link>
                <link to="/category/phones" className='MenuNav'>Celulares</link>
                <link to="/category/wereables" className='MenuNav'>Wereables </link>
                <link to="/"> Sign in </link>
                <CartWidget  cantidad = {} />
            </div>
            
        </nav>
    )
}
export default NavBar
