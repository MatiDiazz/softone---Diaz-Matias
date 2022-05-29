const Item = ({id,name,subtitle,price}) => {
    return(
        <div className= "card">
            <div className = "cardImg"><img src = {imagen}></img></div>
            <div className="cardText">
                <p>{subtitle}</p>
                <p>{name}</p>
            </div>
            <p>{price}</p>
         
         {/* Detalles */}

        </div>
        
    )
}

export default Item
