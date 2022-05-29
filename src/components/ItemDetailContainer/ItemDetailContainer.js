import { useEffect } from "react"

function ItemDetailContainer () {

    useEffect(() => {
        getProduct().then(response => {
            setProduct(response)
        })
    },[])
}
