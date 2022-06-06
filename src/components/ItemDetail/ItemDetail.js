import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({name}) => {
    
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
