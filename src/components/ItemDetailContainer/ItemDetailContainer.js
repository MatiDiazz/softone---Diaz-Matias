import { useEffect } from "react"

const getProduct = () => {

}

function ItemDetailContainer () {

    useEffect(() => {
        getProduct().then(response => {
            setProduct(response)
        })
    },[])
}