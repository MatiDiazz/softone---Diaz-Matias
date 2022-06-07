import { link } from 'react-router-dom'
const Item = ({id,name,subtitle,price, handlePage}) => {
    return(
        <div className= "card">
            <div className = "cardImg"><img src = {imagen}></img></div>
            <div className="cardText">
                <p>{subtitle}</p>
                <H1>{name}</H1>
{/*<button onClick={()=> handlePage({path: 'detail', param: id})}> Ver detalle </button>*/}
                <link to = {'/detail/${id}'} className='Option' >Ver detalle<link>
            </div>
            <p>{price}</p>
         
         {/* Detalles */}

        </div>
        
    )
}

export default Item
