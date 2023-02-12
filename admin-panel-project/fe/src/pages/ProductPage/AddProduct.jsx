import { Box } from "@mui/material";
import NewUser from "../../component/NewUser";
import NewProduct from "../../component/ProductComponents/NewProduct";

export default function AddProduct() {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <h1>Add New Product Page</h1>
      <NewProduct />
    </Box>
  );
}
