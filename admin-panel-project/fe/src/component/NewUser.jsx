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
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Navigate } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function NewUser() {
  const URL = "http://localhost:8080/users/add";
  const [users, setUsers] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [check, setCheck] = React.useState("No");
  const [formSubmitted, setFormSubmitted] = useState(false);
  // const [currentUser, setCurrentUser] = useState({
  //   id: "",
  //   firstname: "",
  //   lastname: "",
  //   phoneNumber: "",
  //   email: "",
  //   password: "",
  // });
  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   setOpen(false);
  // };

  if (formSubmitted) {
    return <Navigate to={"/users"} />;
  }

  const handleCheck = () => {
    setCheck("Yes");
  };
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.isDisable.value);
    setOpen(true);
    setFormSubmitted(true);

    const postData = {
      id: e.target.id.value,
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      phoneNumber: e.target.phoneNumber.value,
      email: e.target.email.value,
      password: e.target.password.value,
      role: e.target.role.value,
      isDisable: e.target.isDisable.value,
    };

    console.log(postData, "postData");

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

  return (
    <Box>
      <h2> Add Users</h2>
      <form onSubmit={handleSubmit}>
        <Box>
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
              <FormControlLabel
                value="Admin"
                control={<Radio />}
                label="Admin"
              />
              <FormControlLabel value="User" control={<Radio />} label="User" />
            </RadioGroup>
          </Box>
          <Box sx={{ m: "10px 30px" }}>
            <FormLabel id="demo-radio-buttons-group-label">Disabled</FormLabel>
            <br />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                sx={{ width: "10px" }}
                onClick={handleCheck}
                value={check}
                name="isDisable"
              />
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
          <Button
            type="submit"
            variant="contained"
            sx={{ mx: "10px" }}
          // onClick={handleClose}
          >
            Save
          </Button>
          <Button variant="outlined" sx={{ mx: "10px" }}>
            Reset
          </Button>
          <Button variant="outlined" sx={{ mx: "10px" }}>
            Cancel
          </Button>
        </Box>
        <Snackbar open={open} autoHideDuration={3000}>
          <Alert severity="success" sx={{ width: "100%" }}>
            New User successfully created!
          </Alert>
        </Snackbar>
      </form>
    </Box>
  );
}
