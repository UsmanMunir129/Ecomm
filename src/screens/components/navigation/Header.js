import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import { MenuItem } from "@mui/material";

const drawerWidth = 240;
const navItems = [
  {
    id: 1,
    name: "SEE DETAILS FOR FREE SHIPPING",
    link: "/about",
  },
  {
    id: 2,
    name: "TRACKING",
    // Link:
  },
  {
    id: 3,
    name: "SIGN IN",
    // Link:
  },
  {
    id: 4,
    name: "HELP",
    // Link:
  },
  {
    id: 5,
    name: "CHAT",
    // Link:
  },
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        WHOLESALE
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item.id} disablePadding>
            <Link href={item.link} underline="none">
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  //Functions for Second Navbar
  const [anchorEl, setAnchorEl] = React.useState(null);

  //One
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //Two
  const open1 = Boolean(anchorEl);
  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };
  //Three
  const open2 = Boolean(anchorEl);
  const handleClick2 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl(null);
  };
  //Four
  const open3 = Boolean(anchorEl);
  const handleClick3 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl(null);
  };
  const buttonStyles = {
    fontSize: "20px",
    fontWeight: 600,
    letterSpacing: "-1px",

    "&:hover": {
      color: "red",
    },
  };

  return (
    <Box sx={{ display: "block" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#000", px: 2 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            WHOLESALE
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              <Button key={item.id} sx={{ color: "#fff" }}>
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
      {/* Image
      Header */}
      {/*  */}
      {/*  */}
      <Grid xs={12} container spacing={1}>
        <Grid
          item
          lg={8}
          sx={{ display: "flex", flexDirection: "row" }}
          spacing={2}
          xs={12}
        >
          <Grid item lg={5}>
            <Box
              sx={{
                width: "100%",
              }}
              component="img"
              alt="Cuircon International"
              src={require("../../../assets/logo.jpg")}
            />
          </Grid>
          <Grid
            sx={{ backgroundColor: "gray", height: "70%", ml: 4 }}
            lg={0.04}
          ></Grid>
          <Grid item lg={6.96} xs={0}>
            <Box
              sx={{
                fontSize: "40px",
                color: "gray",
                ml: 4,
              }}
            >
              ECO
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          lg={4}
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Box>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon sx={{ color: "#000" }} />
                  </InputAdornment>
                ),
              }}
              placeholder="SEARCH"
              id="search"
              type="search"
              size="small"
              sx={{
                backgroundColor: "#D3D3D3",
                borderRadius: 2,
                border: "0px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
      {/* Screens 
      //Header
        Navigation */}
      <Grid container>
        <Grid
          item
          lg={7}
          xs={12}
          sm={12}
          md={10}
          sx={{
            display: "flex",
            flexDirection: "row",
            margin: "0 -1px 0 -1px",
          }}
        >
          <Grid item lg={2.5} xs={2} sm={2} md={2.5}>
            <Button
              id="fade-button"
              color="inherit"
              sx={buttonStyles}
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Auto Race
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Grid>
          <Grid item lg={2.5} xs={2} sm={2} md={2.5}>
            <Button
              id="fade-button"
              color="inherit"
              sx={buttonStyles}
              aria-controls={open1 ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open1 ? "true" : undefined}
              onClick={handleClick1}
            >
              Kart Race
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose1}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose1}>Profile</MenuItem>
              <MenuItem onClick={handleClose1}>My account</MenuItem>
              <MenuItem onClick={handleClose1}>Logout</MenuItem>
            </Menu>
          </Grid>
          <Grid item lg={2.5} xs={2} sm={2} md={2.5}>
            <Button
              id="fade-button"
              color="inherit"
              sx={buttonStyles}
              aria-controls={open2 ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open2 ? "true" : undefined}
              onClick={handleClick2}
            >
              Rental Race
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose2}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose2}>Profile</MenuItem>
              <MenuItem onClick={handleClose2}>My account</MenuItem>
              <MenuItem onClick={handleClose2}>Logout</MenuItem>
            </Menu>
          </Grid>
          <Grid item lg={2.5} xs={2} sm={2} md={2.5}>
            <Button
              id="fade-button"
              color="inherit"
              sx={buttonStyles}
              aria-controls={open3 ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open3 ? "true" : undefined}
              onClick={handleClick3}
            >
              Mechanic
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose3}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose3}>Profile</MenuItem>
              <MenuItem onClick={handleClose3}>My account</MenuItem>
              <MenuItem onClick={handleClose3}>Logout</MenuItem>
            </Menu>
          </Grid>
          <Grid item lg={2.5} xs={2} sm={2} md={2.5}>
            <Button
              id="fade-button"
              color="inherit"
              sx={buttonStyles}
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Customize
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Grid>
        </Grid>
        {/* <Grid item lg={5} xs={0}></Grid> */}
      </Grid>
    </Box>
  );
}

export default Header;
