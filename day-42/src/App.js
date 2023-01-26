import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  const [users, setUsers] = useState([])


  function handleRegister(event) {
    event.preventDefault();
    console.log(users);
    
    const user = {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      password: event.target.password.value,
    }

    setUsers([...users, user]);

  }


  return (
    <div className="App">
      <h1>Day-42 exercise</h1>
      <form onSubmit={handleRegister}>
        <label> Firstname: <input type="text" name="firstname" />
        </label>
        <label> Lastname: <input type="text" name="lastname" />
        </label>
        <br />
        <label> Password: <input type="text" name="password" />
        </label>
        <label> Confirm Password: <input type="text" name="confirm-password" />
        </label>
        <br />
        <label> Register:
          <button type="submit" name="Register"
          >Register</button>
        </label>
      </form>

      <h2>Users Preview</h2>
      {users.map(u => {
        return (
          <div>
            <div>{u.firstname}</div>
            <div>{u.lastname}</div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
