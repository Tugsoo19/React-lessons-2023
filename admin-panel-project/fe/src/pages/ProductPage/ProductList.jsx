import { Box } from "@mui/material";
import ProductTable from "../../component/ProductComponents/ProductTable";

export default function ProductList() {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <h1>Product Page</h1>
      <ProductTable />
    </Box>
  );
}
