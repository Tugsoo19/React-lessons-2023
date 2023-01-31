import { Box } from "@mui/material";
import UsersTable from "../../component/UsersTable";

export default function UsersList() {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <h1>Users Page</h1>
      <UsersTable />
    </Box>
  );
}
