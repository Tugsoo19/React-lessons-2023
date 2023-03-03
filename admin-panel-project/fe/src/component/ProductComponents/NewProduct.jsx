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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function NewProduct() {
  const URL = "http://localhost:8080/products/add";
  const [products, setProducts] = useState([]);
  const [open, setOpen] = React.useState(false);
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

  const [img, setImg] = React.useState('');

  const handleChange = (event) => {
    setImg(event.target.value);
  };

  if (formSubmitted) {
    return <Navigate to={"/products"} />;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setOpen(true);
    setFormSubmitted(true);

    const postData = {
      id: e.target.id.value,
      img: e.target.img.value,
      title: e.target.title.value,
      subtitle: e.target.subtitle.value,
      price: e.target.price.value,
      discount: e.target.discount.value,
      desc1: e.target.desc1.value,
      desc2: e.target.desc2.value,
      code: e.target.code.value,
      hashtag: e.target.hashtag.value,
      technology: e.target.technology.value,
      rating: e.target.rating.value,
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
    setProducts(FETCHED_JSON.data);
  }

  return (
    <Box>
      <h2> New product</h2>
      <form onSubmit={handleSubmit}>
        <Box>
          <FormControl sx={{ m: "10px 30px", width: "500px" }}>
            <InputLabel id="demo-simple-select-label">Image</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={img}
              label="Image"
              name="img"
              onChange={handleChange}
            >
              <MenuItem value={'img1'}>img1</MenuItem>
              <MenuItem value={'img2'}>img2</MenuItem>
              <MenuItem value={'img3'}>img3</MenuItem>
            </Select>
          </FormControl>
          <TextField
            sx={{ m: "10px 30px", width: "600px" }}
            id="outlined-basic"
            label="Title"
            variant="outlined"
            name="title"
          />
          <br />

          <br />
          <TextField
            sx={{ m: "10px 30px", width: "600px" }}

            id="outlined-basic"
            label="Subtitle"
            variant="outlined"
            name="subtitle"
          />
          <br />
          <TextField
            sx={{ m: "10px 30px", width: "600px" }}

            id="outlined-basic"
            label="Price"
            variant="outlined"
            name="price"
          />
          <br />

          <TextField
            sx={{ m: "10px 30px", width: "600px" }}

            id="outlined-basic"
            label="Discount"
            variant="outlined"
            name="discount"
          />
          <br />
          <TextField
            sx={{ m: "10px 30px", width: "600px" }}

            id="outlined-basic"
            label="Description 1"
            variant="outlined"
            name="desc1"
          />
          <br />
          <TextField
            sx={{ m: "10px 30px", width: "600px" }}

            id="outlined-basic"
            label="Description 2"
            variant="outlined"
            name="desc2"
          />
          <br />
          <TextField
            sx={{ m: "10px 30px", width: "600px" }}

            id="outlined-basic"
            label="Code"
            variant="outlined"
            name="code"
          />
          <br />
          <TextField
            sx={{ m: "10px 30px", width: "600px" }}

            id="outlined-basic"
            label="Hashtag"
            variant="outlined"
            name="hashtag"
          />
          <br />
          <TextField
            sx={{ m: "10px 30px", width: "600px" }}

            id="outlined-basic"
            label="Technology"
            variant="outlined"
            name="technology"
          />
          <br />
          <TextField
            sx={{ m: "10px 30px", width: "600px" }}

            id="outlined-basic"
            label="Rating"
            variant="outlined"
            name="rating"
          />
          <br />

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
            Back
          </Button>
        </Box>
        <Snackbar open={open} autoHideDuration={3000}>
          <Alert severity="success" sx={{ width: "100%" }}>
            New Product successfully created!
          </Alert>
        </Snackbar>
      </form>
    </Box>
  );
}
