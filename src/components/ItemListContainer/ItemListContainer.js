import {useState, useEffect} from 'react'
import {getProducts} from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-route-dom'
import { getProductsByCategory } from '../../asyncmock'

const ItemListContainer = ({ gretting, handLePage }) => {

    const[products, setProducts] = useState ([])
    
    const {categoryId} =  usParams()
    console.log(categoryId)

    useEffect (() => {
        if(!categoryId) {
            getProducts().then(response => {
            setProducts(response)
        })
        } else{
            getProductsByCategory(categoryId).then(response => {
                setProducts(response)
        })
     }
    },[categoryId])

    return (
        <div className ='ItemListContainer'>
            <h1>{ gretting }</h1>
            { products.map(product => <p>{product.name}</p>)}
            <ItemList Products = {products} handLePage={handLePage}/>
        </div>
    )

}

export default ItemListContainer 
