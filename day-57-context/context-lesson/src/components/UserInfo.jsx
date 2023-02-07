import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"


export default function UserInfo() {
    const userName = useContext(UserContext);
    //usercontext-iin value-tai ijil nereer zaaval ugnu

    return <span>{userName}</span>
}