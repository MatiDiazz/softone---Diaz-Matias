import ItemCount from "../ItemCount/ItemCount";
import {useState} from react

const ButtonCount = ({onConfirm, stock, initial = 1}) => {
    const [count, setCount] = useState(initial)
    const increment = () {
        if(count < stock) {
        setCount(count+1)
        }
    }
    const decrement = () => {
        setCount(count-1)
    }
    return (
        <div>
        <p>{count}</p>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>-</button>
        <button onClick={() => onConfirm(count)}>Agregar al carrito</button>

const ItemDetail = ({id, name, img, category, descrpition, price, stock }) => {
    const [inputType, setInputType] = useState('input')
    const [quantity, setQuantity] = useState(0)
    
    const ItemCount = inputType === 'input' ? InputCount : ButtonCount
    const handleOnAdd = (count) => {
    console.log ( 'agregue al carrito')
   console.log(count)
    setQuantity(count)
    }
    
    return (
        <article className="CardItem">
        <header className="Header">
            <h2 className="ItemHeader">
                    {name}
            </h2>
        </header>
        <picture>
                >img src={img} alt {name} className="ItemImg"/>
        </picture>
        <section>
                    <p className="Info">
                        Categoria: {category}
                    </p>
                    <p className="Info">
                         Description: {description}
                    </p>
                    <p className="Info">
                        price: {price}
                    </p>
         </section>
<footer className='ItemFooter'>
    {quantity >0 ? <link to='/cart'>Finalizar compra</link> : <ItemCount stock={stock} onConfirm={handleOnAdd}/>}
</footer>
</article>
)
}

    
    
    const onAdd = (cant) => {
        console.log('you add $(cant) products to cart')
    }
    
    return(
        <div>
        <h1> Titulo </h1>
        <h2>{name}</h2>
       
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemDetail
