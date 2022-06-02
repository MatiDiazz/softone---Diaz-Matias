const CartWidget = (props) => {
return(

    <div>
       
       <img src="../images/carrito.png" className='Cart' alt="cart-widget"/></img>
       <span> {props.cantidad} </span>

    </div>
)

}


export default CartWidget
