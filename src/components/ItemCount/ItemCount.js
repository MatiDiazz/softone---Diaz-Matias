import { useState } from 'react';

/*products: [
{ id:1, name:"", price:}
]*/

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial)
    
    const decrement = () => {
            setCount( count -1)
        if (count <= initial){
            setCount(initial)
         }
    }
    const increment = () => {
        setCount(count + 1)
        if (count == stock) {
            setCount(stock)
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
