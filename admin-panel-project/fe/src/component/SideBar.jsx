import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AppsIcon from "@mui/icons-material/Apps";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import DescriptionIcon from "@mui/icons-material/Description";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [open, setOpen] = React.useState(true);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ width: "100%", maxWidth: 280, bgcolor: "background.paper" }}>
      <nav aria-label="main menu folders">
        <List>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <ShoppingCartRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="E-commerce" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <ul>
              <ListItemButton>
                {" "}
                <li>Product Manage</li>
              </ListItemButton>
              <ListItemButton>
                {" "}
                <li>Products Grid</li>
              </ListItemButton>
              <ListItemButton>
                {" "}
                <li>Product Page</li>
              </ListItemButton>
            </ul>
          </Collapse>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <PersonRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="User" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <ul>
              <Link
                // underline="none"
                to="/users"
                className={activeIndex === 0 ? "active" : ""}
                onClick={() => setActiveIndex(0)}
              >
                <ListItemButton>
                  {" "}
                  <li>User List</li>
                </ListItemButton>
              </Link>
              <Link
                to="/users/add"
                className={activeIndex === 1 ? "active" : ""}
                onClick={() => setActiveIndex(1)}
              >
                <ListItemButton>
                  {" "}
                  <li>User Add</li>
                </ListItemButton>
              </Link>

              <ListItemButton>
                {" "}
                <li>User Edit</li>
              </ListItemButton>
            </ul>
          </Collapse>
          <ListItemButton>
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Documentation" />
          </ListItemButton>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary template">
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              TEMPLATE
            </ListSubheader>
          }
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AppsIcon />
              </ListItemIcon>
              <ListItemText primary="Core" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <WindowOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Tables" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FilterNoneIcon />
              </ListItemIcon>
              <ListItemText primary="UI Elements" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary="Forms" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
