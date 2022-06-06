import { useState, useEffect } from 'react'
import { getProductById } from '../../asycmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

Const ItemDetailContainer = (id) => {
    const [Product,setProduct] = useState()

    useEffect(() => {
        getProductById('1').then(response => {
            console.log(response)
        })
    },[])
    
    return(
    <div className='ItemDetailContainer'>
        <ItemDetail title={product?.name}/>
    </div>
    )
}
