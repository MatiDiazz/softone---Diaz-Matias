import { useState } from "react"

const ItemFunction = () => {

    const [count, setCount] = useState(0)

    console.log(useEffect)

    useEffect(()=>{
        console.log("eject")

    return ()=>{
        console.log("eject2")
    }
    },[])

    const decrement = () => {
for (let i = 0; i < 5 ; i ++) {
    console.log("vuelta $(i+1)")
    setCount((count) => count - 1)
}
    }

const increment = () => {
 if (count + 5){
        setCount(count + 1)
    }
    }
console.log("eject3")
    
    return (
        <div style={{display:"flex"}}>
            <button onClick={decrement}label="-"/>
            <h1>{count}</h1>
            <button onClick={increment}children="+"/>
        </div>
    )
}

export default CountFunction