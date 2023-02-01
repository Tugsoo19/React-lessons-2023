import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";

export default function UsersTable() {
  const URL = "http://localhost:8080/users/add";
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }
  useEffect(() => {
    fetchAllData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstname", headerName: "First name", width: 130 },
    { field: "lastname", headerName: "Last name", width: 130 },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      type: "number",
      width: 130,
    },
    {
      field: "email",
      headerName: "E-mail",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      field: "role",
      headerName: "Role",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 100,
    },
    {
      field: "isDisable",
      headerName: "Disable",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 100,
    },
  ];

  return (
    <div style={{ height: 800, width: "100%" }}>
      <Link to="/users/add">
        <Button variant="contained" sx={{ mx: "10px" }} onClick={handleClick}>
          New
        </Button>
      </Link>

      <br />
      <br />
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
