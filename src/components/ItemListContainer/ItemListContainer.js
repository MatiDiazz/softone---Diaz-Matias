import {useState, useEffect} from 'react'
import {getProducts} from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-route-dom'
import { getProductsByCategory } from '../../asyncmock'

const ItemListContainer = ({ gretting }) => {

    const[products, setProducts] = useState ([])
    const [loading, setLoading] = useState(true)
    
    const {categoryId} =  usParams()
    console.log(categoryId)

    useEffect (() => {
        if(!categoryId) {
            getProducts().then(response => {
            setProducts(response)
        }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        } else{
            getProductsByCategory(categoryId).then(response => {
                setProducts(response)
        }).catch(error=>{
                console.log(error)
            }).finally(() => {
                setLoading(false)
     }
    },[categoryId])
    
    if(loading) {
     return <h1> loading...</h1>
    }

    return (
        <div className ='ItemListContainer'>
            <h1>{ gretting }</h1>
        {
            products.legth > 0
               ? <ItemList products={products}/>
            : <h2> No hay productos <h2>
          
        </div>
             { products.map(product => <p>{product.name}</p>)}
    )

}

export default ItemListContainer 
