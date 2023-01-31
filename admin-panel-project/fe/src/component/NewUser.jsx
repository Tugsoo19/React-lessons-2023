import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

export default function NewUser() {
  const [value, setValue] = React.useState("User");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box>
      <h2> Add Users</h2>
      <Box>
        <TextField
          sx={{ m: "10px 30px" }}
          fullWidth
          id="outlined-basic"
          label="First Name"
          variant="outlined"
        />
        <br />
        <TextField
          sx={{ m: "10px 30px" }}
          fullWidth
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
        />
        <br />
        <TextField
          sx={{ m: "10px 30px" }}
          fullWidth
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
        />
        <br />
        <TextField
          sx={{ m: "10px 30px" }}
          fullWidth
          id="outlined-basic"
          label="E-Mail"
          variant="outlined"
        />
        <br />
        <Box sx={{ m: "10px 30px" }}>
          <FormLabel id="demo-radio-buttons-group-label">Role</FormLabel>
          <br />
          <RadioGroup row value={value} onChange={handleChange}>
            <FormControlLabel value="Admin" control={<Radio />} label="Admin" />
            <FormControlLabel value="User" control={<Radio />} label="User" />
          </RadioGroup>
        </Box>
        <Box sx={{ m: "10px 30px" }}>
          <FormLabel id="demo-radio-buttons-group-label">Disabled</FormLabel>
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
        />
      </Box>
      <Box sx={{ m: "10px 30px" }}>
        <Button variant="contained" sx={{ mx: "10px" }}>
          Save
        </Button>
        <Button variant="outlined" sx={{ mx: "10px" }}>
          Reset
        </Button>
        <Button variant="outlined" sx={{ mx: "10px" }}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
}
