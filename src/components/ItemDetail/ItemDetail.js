import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({props}) => {
    
    const onAdd = (cant) => {
        console.log('you add $(cant) products to cart')
    }
    
    return(
        <div>
        <h2>Description</h2>
       
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemDetail
