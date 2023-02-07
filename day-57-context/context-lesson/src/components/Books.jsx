import { useContext } from "react"
import { BookContext, BookProvider } from "../contexts/BookContext"
import Book from "./Book"

export default function Books() {
    const list = useContext(BookContext)
    return (
        <ul>{list.map((item, index) => {
            return <Book key={index} item={item} />
        })}
        </ul>
    )
}