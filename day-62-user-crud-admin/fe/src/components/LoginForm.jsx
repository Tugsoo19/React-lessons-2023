import { Button, Grid, Input, InputLabel } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";

export default function LoginForm() {

    const URL = 'http://localhost:8181/login'
    const navigate = useNavigate()

    async function handleLoginSubmit(e) {
        e.preventDefault()

        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
        }

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        const FETCHED_DATA = await fetch(URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json()

        if (FETCHED_JSON.status === 'success') {
            toast("Successfully Logged in")
            navigate("/users")
        }
        console.log(FETCHED_JSON);

    }


    return (
        <div>
            <form onSubmit={handleLoginSubmit}>
                <InputLabel>Email
                </InputLabel>
                <Input name="email" type="email">Email</Input>
                <InputLabel>Password
                </InputLabel>
                <Input name="password">Password</Input>
                <br />
                <Button type="submit">Login</Button>
            </form>
            <ToastContainer />
        </div>
    )
}