import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import VerticalTabs from "./component/SideBar";
import SideBar from "./component/SideBar";
import Header from "./component/Header";
import { Box } from "@mui/system";
import UsersList from "./pages/UserPage/UserList";
import AddUser from "./pages/UserPage/AddUser";
import ProductList from "./pages/ProductPage/ProductList";
import AddProduct from "./pages/ProductPage/AddProduct";
// import RouterBreadcrumbs from "./component/test";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <RouterBreadcrumbs /> */}
      <Box display="flex" gap={4}>
        <SideBar />

        <Routes>
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/add" element={<AddProduct />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
