import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const URL = "http://localhost:8080/users";

  const [users, setUsers] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: "",
    username: "",
    age: "",
    test: "",
  });

  async function fetchAllData() {
    // fetch a data from localhost:8080/users
    const FETCHED_DATA = await fetch(URL); // response
    const FETCHED_JSON = await FETCHED_DATA.json(); // {status: 'success', data:[{id:...}]}
    setUsers(FETCHED_JSON.data);
  }

  useEffect(() => {
    fetchAllData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (isUpdate) {
      update();
      console.log(isUpdate);
    } else {
      const postData = {
        username: e.target.username.value,
        age: e.target.age.value,
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      };

      const FETCHED_DATA = await fetch(URL, options);
      const FETCHED_JSON = await FETCHED_DATA.json();
      console.log(FETCHED_JSON);
      setUsers(FETCHED_JSON.data);
    }
  }

  async function handleDelete(userId) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }
  async function update() {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentUser),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }

  function handleNameChange(e) {
    setCurrentUser({
      ...currentUser,
      username: e.target.value,
    });
    console.log(setCurrentUser);
  }

  function handleAgeChange(e) {
    setCurrentUser({
      ...currentUser,
      age: e.target.value,
    });
  }

  async function handleEdit(userId) {
    setIsUpdate(true);
    const current = users.filter((user) => user.id === userId);
    setCurrentUser(current);
    console.log(setCurrentUser);
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
        users.map((user) => {
          return (
            <div>
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
