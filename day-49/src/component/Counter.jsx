import { useState } from "react"

export default function Counter({ isFancy }) {

    const [score, setScore] = useState(0)
    const [hover, setHover] = useState(false)
    const handleClick = () => { setScore(score + 1) }

    let className = 'counter';
    if (hover) {
        className += ' hover'
    }

    if (isFancy) {
        className += ' fancy'
    }

    return (
        <div
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1>{score}</h1>
            <button onClick={handleClick}>Add one</button>
        </div>

    )
}