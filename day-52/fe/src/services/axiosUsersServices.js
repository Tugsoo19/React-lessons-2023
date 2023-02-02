import axios from "axios"

async function fetchAllData(URL, setUsers) {
    // fetch a data from localhost:8080/users
    const FETCHED_DATA = await axios.get(URL); // response
    console.log('axios', FETCHED_DATA);

    // const FETCHED_JSON = await FETCHED_DATA.json(); // {status: 'success', data:[{id:...}]}
    setUsers(FETCHED_DATA.data.data);
}

async function deleteUser(userId, URL, setUsers) {
    const FETCHED_DATA = await axios({
        url: URL,
        method: 'DELETE',
        data: {
            userId: userId,
        }
    });
    // const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_DATA.data.data);
}

async function updateUser(currentUser, URL, setUsers, setIsUpdate, setCurrentUser, newUser) {
    const putData = {
        id: currentUser.id,
        username: currentUser.username,
        age: currentUser.age,
    }
    const FETCHED_DATA = await axios({
        url: URL,
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        data: (putData),
    })

    setUsers(FETCHED_DATA.data.data);
    setIsUpdate(false)
    setCurrentUser(newUser)
}

async function createUser(e, URL, setUsers) {
    const postData = {
        username: e.target.username.value,
        age: e.target.age.value,
    };

    const FETCHED_DATA = await axios({
        url: URL,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: (postData),
    });

    setUsers(FETCHED_DATA.data.data);


}

export { fetchAllData, deleteUser, updateUser, createUser }