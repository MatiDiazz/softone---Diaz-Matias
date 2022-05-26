import {useState, useEffect} from 'react'
import {getProducts} from '../../asyncmock'

const ItemListContainer = ({ gretting}) => {

    const[products, setProducts] = useState ([])

    useEffect (() => {
        getProducts().then(response => {
            setProducts(response)
        })
    })

    return (
        <div className ='ItemListContainer'>
            <h1>{ gretting }</h1>
            { products.map(product => <p>{product.name}</p>)}
            <ItemList Products = {products}/>
        </div>
    )

}

export default ItemListContainer 
