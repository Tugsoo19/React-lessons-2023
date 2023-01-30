
import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const URL = 'http://localhost:8080/users';

  const [users, setUsers] = useState([])
  const [openForm, setOpenForm] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  async function fetchAllData() {
    // fetch a data from localhost:8080/users
    const FETCHED_DATA = await fetch(URL) // response
    const FETCHED_JSON = await FETCHED_DATA.json()  // {status: 'success', data:[{id:...}]}
    setUsers(FETCHED_JSON.data)

  }

  useEffect(() => {
    fetchAllData()
  }, [])

  async function handleSubmit(e) {
    e.preventDefault();
    const postData = {
      username: e.target.username.value,
      age: e.target.age.value
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    }

    const FETCHED_DATA = await fetch(URL, options)
    const FETCHED_JSON = await FETCHED_DATA.json()
    console.log(FETCHED_JSON);
    setUsers(FETCHED_JSON.data)

  }

  async function handleDelete(userId) {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: userId
      })
    }
    const FETCHED_DATA = await fetch(URL, options)
    const FETCHED_JSON = await FETCHED_DATA.json()
    setUsers(FETCHED_JSON.data)
  }

  async function handleEdit(userId) {
    // const options = {
    //   method: 'EDIT',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     userId: userId
    //   })
    // }
    // const FETCHED_DATA = await fetch(URL, options)
    // const FETCHED_JSON = await FETCHED_DATA.json()
    // setUsers(FETCHED_JSON.data)
    setCurrentUser(setUsers)
    setOpenForm(true)
  }


  return (
    <div className="App">
      <h1>Day-52 - NodeJS FS Module </h1>
      <h3>Create User FORM</h3>
      <form onSubmit={handleSubmit}>
        <label>
          User Name:
          <input name="username" />
        </label>
        <br />
        <label>
          Age:
          <input name="age" />
        </label>
        {openForm ? setUsers = { setUsers } : <div></div>}
        <br />
        <button>Submit</button>
      </form>
      <h3>Users List</h3>
      {
        users && users.map(user => {
          return (
            <div>
              <p>{user.username} : {user.age}  {" "}
                <button onClick={() => handleEdit(user.id)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button></p>

            </div>
          )
        })
      }
    </div>
  );
}

export default App;
