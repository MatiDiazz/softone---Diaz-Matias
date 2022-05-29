import { useState } from 'react';

/*products: [
{ id:1, name:"", price:}
]*/

const ItemCount = () => {

    const [count, setCount] = useState(0)
    
    const decrement = () => {
            setCount( count -1)
    }
    const increment = () => {
        setCount(count + 1)
    }
    
  return (
        <div lassName="Count" style={{display:'flex'}}>
            <button onClick={decrement}> - </button>
            <h1>{count}</h1>
            <button onClick={increment}> + </button>

        <h1 className="onAdd"> Add </h1>

        </div>
    )
}

<ItemCount stock="5" initial="1"/>

export default ItemCount
