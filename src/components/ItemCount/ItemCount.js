import { useState } from 'react';

/*products: [
{ id:1, name:"", price:}
]*/

const ItemCount = ({initial=1, stock=0 , onAdd}) => {

    const [quantify, setQuantity] = useState(initial)
    
    const increment = () => {
        if (quantity < stock) {
            setCount( quantity +1)
         }
    }
    const decrement = () => {
        if (quantity > 1){
            setQuantity(quantity-1)
        }
    }
    const AddProduct = () => {
        onAdd (count)
    }
    
  return (
        <div lassName="Count" style={{display:'flex'}}>
            <button onClick={decrement}> - </button>
            <h1>{count}</h1>
            <button onClick={increment}> + </button>
            <button className='AddToCart' onclick={AddProduct}> Agregar al carrito <button/>
        </div>
    )
}



export default ItemCount
