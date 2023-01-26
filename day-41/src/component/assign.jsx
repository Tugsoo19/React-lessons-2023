import { useState } from "react"

export default function Assign() {

    const [counter, setCounter] = useState(0)

    const handleClick= ()=> {setCounter(counter + 1)}

    const [inputText, setInputText] = useState('')

    const handleInput = function (event){
       
        console.log(('handle input clicked'));
        setInputText(event.target.value)
    }

    return (
        <div>
            <div>
            <p>{counter}</p>
            <button onClick={handleClick}>Click</button>
            
        </div>
        <div>
            <input value={inputText} onChange={(e)=>{handleInput(e)}}></input>
            <p >{inputText}</p>
        </div>
        </div>
        

    )
}