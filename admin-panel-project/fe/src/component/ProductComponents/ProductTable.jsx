import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductTable() {
  const URL = "http://localhost:8080/products/add";

  const [products, setProducts] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setProducts(FETCHED_JSON.data);
  }
  useEffect(() => {
    fetchAllData();
  }, []);

  async function handleDelete(id) {
    toast("Product is deleted!");
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setProducts(FETCHED_JSON.data);
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "img", headerName: "Image", width: 130 },
    { field: "title", headerName: "Title", width: 130 },
    {
      field: "subtitle",
      headerName: "Subtitle",
      type: "text",
      width: 200,
    },
    {
      field: "price",
      headerName: "Price",
      description: "This column has a value getter and is not sortable.",
      sortable: true,
      width: 160,
      type: "text"
    },
    {
      field: "rating",
      headerName: "Rating",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 150,
    },

    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 200,
      renderCell: (params) => {
        return (
          <Box>
            <Button variant="outlined" color="success" sx={{ m: "5px" }}>Edit</Button>
            <Button variant="outlined" color="error" sx={{ m: "5px" }}>Delete</Button>
          </Box>
        );
      },
    },
  ];

  return (
    <div style={{ height: 800, width: "100%" }}>
      <Link to="/products/add">
        <Button variant="contained" sx={{ mx: "10px" }}>
          Create
        </Button>
      </Link>

      <br />
      <br />
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
