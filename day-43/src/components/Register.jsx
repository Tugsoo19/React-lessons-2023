export default function Register(){
    return(
        <div>
            <h1>It is Register page</h1>
            <form>
                <label htmlFor='email'>Email:</label>
                <input type='email'></input>
                <br/>
                <label htmlFor='firstname'>Firstname:</label>
                <input type='text' name="firstname"></input>
                <br/>
                <label htmlFor='lastname'>Lastname:</label>
                <input type='text' name="lastname"></input>
                <br/>
                <label htmlFor='password'>Password:</label>
                <input name="password" type='password'></input>
                <br/>
                <label htmlFor='password'>Confirm Password:</label>
                <input name="password" type='password'></input>
                <br/>
                <button>Register</button>
            </form>
        </div>
    )
}