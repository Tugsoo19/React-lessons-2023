import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import styles from "../styles/Home.module.css"


const inter = Inter({ subsets: ['latin'] })

export default function Home(): JSX.Element {
  const [num1, setNum1] = useState<number>(0)
  const [num2, setNum2] = useState<number>(0)
  const [result, setResult] = useState<number>(0)

  const add = () => {
    setResult(num1 + num2)

  }

  const subtract = () => {
    setResult(num1 - num2)

  }

  const multiply = () => {
    setResult(num1 * num2)
  }

  const divide = () => {
    setResult(num1 / num2)
  }

  return (
    <div className={styles.container}>
      <div className={styles.result} data-testid="result">{result}</div>
      <input
        className={styles.input}
        value={num1} type="number"
        data-testid="num1"
        onChange={(e) => { setNum1(parseInt(e.target.value)) }}
      ></input>
      <input
        className={styles.input}
        value={num2}
        type="number"
        data-testid="num2"
        onChange={(e) => { setNum2(parseInt(e.target.value)) }}
      ></input>

      <button
        className={styles.button}
        onClick={add}
        data-testid="add"
      > Add
      </button>
      <button
        className={styles.button}
        onClick={subtract}
        data-testid="subtract">
        Subtract
      </button>
      <button
        className={styles.button}
        onClick={multiply}
        data-testid="multiply">
        Multiply
      </button>
      <button
        className={styles.button}
        onClick={divide}
        data-testid="divide">
        Divide
      </button>
    </div>
  )
}
