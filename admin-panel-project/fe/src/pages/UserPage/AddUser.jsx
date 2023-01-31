import { Box } from "@mui/material";
import NewUser from "../../component/NewUser";

export default function AddUser() {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <h1>Add New User Page</h1>
      <NewUser />
    </Box>
  );
}
