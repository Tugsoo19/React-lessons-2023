import { useState } from "react";
import { useEffect } from "react"

export default function Anime() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('My anime Component');
        setCount(count + 1)
        console.log(count);
    }, [])

    function handleClick(e) {
        console.log("you clicked me");
    }
    return (
        <div>
            <h1>day-48 - UseEffect with Anime</h1>
            <button onClick={(e) => {
                handleClick(e)
                setCount(count + 1)
            }}>Anime Click</button>
        </div>
    )
}