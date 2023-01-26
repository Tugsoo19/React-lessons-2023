import { useState } from "react";
import { Navigate } from 'react-router-dom'
import Header from "./Header";


export default function Register() {
    const [formSubmitted, setFormSubmitted] = useState(false)
    if (formSubmitted) {
        return <Navigate to={'/login'} />
    }

    const handleSubmit = function (event) {
        event.preventDefault();
        setFormSubmitted(true);
    }
    return (
        <div>
            <Header />
            <h1>Register Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input name="email" type='email' /> <br />
                <label htmlFor="username">User name:</label>
                <input name="username" type='text' /> <br />
                <label htmlFor="password">Password:</label>
                <input name="password" type='password' /> <br />
                <label htmlFor="phone-number">Phone number:</label>
                <input name="phone-number" type='number' /> <br />
                <button>Register</button>
            </form>
        </div>
    )
}