import React, { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Badge, Button, Avatar, Link, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo10 from "./logo10.png";
import { Helmet } from "react-helmet";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Navbar() {
  const [editorsMenuAnchorEl, setEditorsMenuAnchorEl] = useState(null);
  const [aiMenuAnchorEl, setAiMenuAnchorEl] = useState(null);
  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const state = useSelector(state => state.cart);
  const user = useSelector(state => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem("user");
    if (userDataFromStorage) {
      try {
        const parsedData = JSON.parse(userDataFromStorage);
        setUserData(parsedData);
      } catch (error) {
        console.error("Failed to parse user data:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear("user");
    localStorage.clear("auth_token");
    dispatch({ type: "CLEAR__USER" });
    navigate("/login");
  };

  const handleEditorsMenuOpen = (event) => {
    setEditorsMenuAnchorEl(event.currentTarget);
  };

  const handleEditorsMenuClose = () => {
    setEditorsMenuAnchorEl(null);
  };

  const handleAiMenuOpen = (event) => {
    setAiMenuAnchorEl(event.currentTarget);
  };

  const handleAiMenuClose = () => {
    setAiMenuAnchorEl(null);
  };

  const handleUserMenuOpen = (event) => {
    setUserMenuAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = (
    <>
      <Button component={RouterLink} to="/" color="inherit" sx={{ marginRight: 2, padding: 1.5, fontSize: '1rem', display: { xs: 'none', sm: 'block' } }}>Home</Button>
      <Button component={RouterLink} to="/Courses1" color="inherit" sx={{ marginRight: 2, padding: 1.5, fontSize: '1rem', display: { xs: 'none', sm: 'block' } }}>Courses</Button>
      <Button component={RouterLink} to="/cart" color="inherit" sx={{ marginRight: 2, padding: 1.5, fontSize: '1rem', display: { xs: 'none', sm: 'block' } }}>
        <Badge badgeContent={state ? state.length : 0} color="secondary">
          <ShoppingCartIcon /> Cart
        </Badge>
      </Button>
      <Button color="inherit" onClick={handleEditorsMenuOpen} sx={{ marginRight: 2, padding: 1.5, fontSize: '1rem', display: { xs: 'none', sm: 'block' } }}>Editors</Button>
      <Menu
        anchorEl={editorsMenuAnchorEl}
        open={Boolean(editorsMenuAnchorEl)}
        onClose={handleEditorsMenuClose}
      >
        <MenuItem component={RouterLink} to="/codeEditor" onClick={handleEditorsMenuClose}>Code Editor</MenuItem>
        <MenuItem component={RouterLink} to="/yjseditor" onClick={handleEditorsMenuClose}>C-Board</MenuItem>
        <MenuItem component={RouterLink} to="/blockly2" onClick={handleEditorsMenuClose}>Blockly</MenuItem>
      </Menu>
      <Button color="inherit" onClick={handleAiMenuOpen} sx={{ marginRight: 2, padding: 1.5, fontSize: '1rem', display: { xs: 'none', sm: 'block' } }}>AI & ML</Button>
      <Menu
        anchorEl={aiMenuAnchorEl}
        open={Boolean(aiMenuAnchorEl)}
        onClose={handleAiMenuClose}
      >
        <MenuItem component={RouterLink} to="/aiModel" onClick={handleAiMenuClose}>AI Model</MenuItem>
        <MenuItem component={RouterLink} to="/mlModel" onClick={handleAiMenuClose}>ML Model</MenuItem>
        <MenuItem component={RouterLink} to="/caseStudy" onClick={handleAiMenuClose}>Case Study</MenuItem>
      </Menu>
      {userData ? (
        <>
          <IconButton color="inherit" onClick={handleUserMenuOpen} sx={{ padding: 1.5, display: { xs: 'none', sm: 'block' } }}>
            <Avatar>{userData.userName.charAt(0)}</Avatar>
          </IconButton>
          <Menu
            anchorEl={userMenuAnchorEl}
            open={Boolean(userMenuAnchorEl)}
            onClose={handleUserMenuClose}
          >
            <MenuItem component={RouterLink} to="/student-dashboard" onClick={handleUserMenuClose}>Dashboard</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </>
      ) : (
        <Button component={RouterLink} to="/login" color="inherit" sx={{ padding: 1.5, fontSize: '1rem', display: { xs: 'none', sm: 'block' } }}>Login</Button>
      )}
    </>
  );

  return (
    <>
      <Helmet>
        <title>Advisions LMS</title>
        <meta name="description" content="Learning Management System" />
        <meta name="keywords" content="Advisions, LMS" />
      </Helmet>
      <AppBar position="sticky" color="default" className="bg-white">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ marginRight: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link component={RouterLink} to="/" underline="none" sx={{ display: "flex", alignItems: "center", marginRight: 2 }}>
            <img src={logo10} alt="Logo" style={{ height: "35px", marginRight: "5px" }} />
          </Link>
          <div style={{ flexGrow: 1 }} />
          {menuItems}
          {isMobile && userData && (
            <IconButton color="inherit" onClick={handleUserMenuOpen} sx={{ padding: 1.5 }}>
              <Avatar>{userData.userName.charAt(0)}</Avatar>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <List>
          <ListItem button component={RouterLink} to="/" onClick={handleDrawerToggle}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={RouterLink} to="/Courses1" onClick={handleDrawerToggle}>
            <ListItemText primary="Courses" />
          </ListItem>
          <ListItem button component={RouterLink} to="/cart" onClick={handleDrawerToggle}>
            <ListItemText primary="Cart" />
          </ListItem>
          <ListItem button onClick={handleEditorsMenuOpen}>
            <ListItemText primary="Editors" />
          </ListItem>
          <ListItem button onClick={handleAiMenuOpen}>
            <ListItemText primary="AI & ML" />
          </ListItem>
          {userData ? (
            <>
              <ListItem button component={RouterLink} to="/student-dashboard" onClick={handleDrawerToggle}>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem button onClick={handleLogout}>
                <ListItemText primary="Logout" />
              </ListItem>
            </>
          ) : (
            <ListItem button component={RouterLink} to="/login" onClick={handleDrawerToggle}>
              <ListItemText primary="Login" />
            </ListItem>
          )}
        </List>
      </Drawer>
    </>
  );
}
