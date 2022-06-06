const Item = ({id,name,subtitle,price, handlePage}) => {
    return(
        <div className= "card">
            <div className = "cardImg"><img src = {imagen}></img></div>
            <div className="cardText">
                <p>{subtitle}</p>
                <H1>{name}</H1>
                <button onClick={()=> handlePage({path: 'detail'})}> Ver detalle </button>
            </div>
            <p>{price}</p>
         
         {/* Detalles */}

        </div>
        
    )
}

function ItemCount({stock, initial, onAdd}) {

    return 
}
export default Item
