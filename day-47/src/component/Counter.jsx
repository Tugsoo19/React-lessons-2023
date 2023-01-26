import { useState } from "react"


export default function Counter() {
    const [counter, setCounter] = useState(0)
    // const [hover, setHover] = useState(false)
    const handleClick = () => { setCounter(counter + 1) }

    // if (hover) {
    //     className += 
    // }
    return (

        <div className="counter">
            <h1>{counter}</h1>
            <button onClick={handleClick}>Add one</button>
        </div >
    )
}