import { Input, TextField } from "@mui/material";
import { Box } from "@mui/system";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

export default function NewUser() {

  const URL = "http://localhost:8080/users/add"
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState("User");

  // const [currentUser, setCurrentUser] = useState({
  //   id: "",
  //   firstname: "",
  //   lastname: "",
  //   phoneNumber: "",
  //   email: "",
  //   password: "",
  // });



  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e)

    const postData = {
      id: e.target.id.value,
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      phoneNumber: e.target.phoneNumber.value,
      email: e.target.email.value,
      password: e.target.password.value,
      role: e.target.role.value
    };

    console.log(postData, "postData");

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData)
    }
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    setUsers(FETCHED_JSON.data);
  }

  return (
    <Box>
      <h2> Add Users</h2>
      <form onSubmit={handleSubmit}>
        <Box >
          <TextField
            sx={{ m: "10px 30px" }}
            fullWidth
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            name="firstname"
          />
          <br />
          <TextField
            sx={{ m: "10px 30px" }}
            fullWidth
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            name="lastname"
          />
          <br />
          <TextField
            sx={{ m: "10px 30px" }}
            fullWidth
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            name="phoneNumber"
          />
          <br />
          <TextField
            sx={{ m: "10px 30px" }}
            fullWidth
            id="outlined-basic"
            label="E-Mail"
            variant="outlined"
            name="email"
          />
          <br />
          <Box sx={{ m: "10px 30px" }}>
            <FormLabel id="demo-radio-buttons-group-label">Role</FormLabel>
            <br />
            <RadioGroup row name="role">
              <FormControlLabel value="Admin" control={<Radio />} label="Admin" />
              <FormControlLabel value="User" control={<Radio />} label="User" />
            </RadioGroup>
          </Box>
          <Box sx={{ m: "10px 30px" }}>
            <FormLabel id="demo-radio-buttons-group-label" name="isDisable">Disabled</FormLabel>
            <br />
            <FormGroup>
              <FormControlLabel control={<Checkbox />} sx={{ width: "10px" }} />
            </FormGroup>
          </Box>
          <Box sx={{ m: "10px 30px" }}>
            <h4>Avatar</h4>
            <Button variant="contained" component="label">
              Upload an image
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </Box>
          <TextField
            sx={{ m: "10px 30px" }}
            fullWidth
            id="outlined-basic"
            label="Password"
            variant="outlined"
            name="password"
          />
        </Box>
        <Box sx={{ m: "10px 30px" }}>
          <Button type="submit" variant="contained" sx={{ mx: "10px" }}>
            Save
          </Button>
          <Button variant="outlined" sx={{ mx: "10px" }}>
            Reset
          </Button>
          <Button variant="outlined" sx={{ mx: "10px" }}>
            Cancel
          </Button>
        </Box>
      </form>
      <h3>Users List</h3>
      {users &&
        users.map((user, index) => {
          return (
            <div key={index}>
              <p>
                {user.firstname} | {user.lastname}|{" "}
                {user.phoneNumber} {" "}|
                {user.email}
              </p>
            </div>
          );
        })}
    </Box>
  );
}
