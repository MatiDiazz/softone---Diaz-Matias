import Item from '../Item/Item'

const ItemList = ({Products}) => {
    return(
        <div>
            {Products.map(Prod => <Item key={Prod.id} {...Prod}/>)}
        </div>
    )
}

export default ItemList
