import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({title}) => {
    
    const onAdd = (cant) => {
        console.log('you add $(cant) products to cart')
    }
    
    return(
        <div>
        <h1> Titulo </h1>
        <h2>{Title}</h2>
       
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemDetail
