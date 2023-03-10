import "./App.css";
import { useEffect, useState } from "react";
// import { updateUser, createUser } from "./services/usersServices"
import { fetchAllData, deleteUser, updateUser, createUser } from './services/axiosUsersServices'
function App() {
  const URL = "http://localhost:8000/users";

  const [users, setUsers] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const newUser = ({
    id: "",
    username: "",
    age: "",
  });

  const [currentUser, setCurrentUser] = useState(newUser)

  useEffect(() => {
    fetchAllData(URL, setUsers);
  }, []);


  async function handleSubmit(e) {
    e.preventDefault();
    if (!isUpdate) {
      createUser(e, URL, setUsers)
    } else {
      updateUser(currentUser, URL, setUsers, setIsUpdate, setCurrentUser, newUser)
    }
  }

  async function handleDelete(userId) {
    deleteUser(userId, URL, setUsers)

  }

  // async function update() {
  //   const options = {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(currentUser),
  //   };
  //   const FETCHED_DATA = await fetch(URL, options);
  //   const FETCHED_JSON = await FETCHED_DATA.json();
  //   setUsers(FETCHED_JSON.data);
  // }

  function handleNameChange(e) {
    setCurrentUser({
      ...currentUser,
      username: e.target.value,
    });
  }

  function handleAgeChange(e) {
    setCurrentUser({
      ...currentUser,
      age: e.target.value,
    });
  }

  async function handleEdit(userId) {
    console.log(userId);
    setIsUpdate(true);
    const filteredUser = users.filter((user) => user.id === userId)[0];
    setCurrentUser(filteredUser);
    //  if (filteredUser){
    //   setCurrentUser({
    //     id: filteredUser.id,
    //     username: filteredUser.username,
    //     age: filteredUser.age,
    //   })
    // }

  }

  return (
    <div className="App">
      <h1>Day-52 - NodeJS FS Module </h1>
      <h3>Create User FORM</h3>
      <form onSubmit={handleSubmit}>
        <label>
          User Name:
          <input
            name="username"
            value={currentUser.username}
            onChange={handleNameChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            name="age"
            value={currentUser.age}
            onChange={handleAgeChange}
          />
        </label>
        <br />
        <button>{isUpdate ? "Update" : "Submit"}</button>
      </form>
      <h3>Users List</h3>
      {users &&
        users.map((user, index) => {
          return (
            <div key={index}>
              <p>
                {user.username} : {user.age}{" "}
                <button onClick={() => handleEdit(user.id)}>Edit</button>{" "}
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </p>
            </div>
          );
        })}
    </div>
  );
}


export default App;
