// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import Link from "@mui/material/Link";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import SearchIcon from "@mui/icons-material/Search";
// import InputAdornment from "@mui/material/InputAdornment";
// import Grid from "@mui/material/Grid";
// import TextField from "@mui/material/TextField";
// import Menu from "@mui/material/Menu";
// import Fade from "@mui/material/Fade";
// import { MenuItem } from "@mui/material";
// import Navbar from "./Navbar";

// const drawerWidth = 500;
// const navItems = [
//   {
//     id: 1,
//     name: "SEE DETAILS FOR FREE SHIPPING",
//     link: "/about",
//   },
//   {
//     id: 2,
//     name: "TRACKING",
//     // Link:
//   },
//   {
//     id: 3,
//     name: "SIGN IN",
//     // Link:
//   },
//   {
//     id: 4,
//     name: "HELP",
//     // Link:
//   },
//   {
//     id: 5,
//     name: "CHAT",
//     // Link:
//   },
// ];

// const menu = [
//   {
//     id: 1,
//     name: "Auto Race",
//     link: "/about",
//   },
//   {
//     id: 1,
//     name: "Kart Race",
//     link: "/about",
//   },
//   {
//     id: 1,
//     name: "Rental Race",
//     link: "/about",
//   },
//   {
//     id: 1,
//     name: "Mechanic",
//     link: "/about",
//   },
//   {
//     id: 1,
//     name: "Customize",
//     link: "/about",
//   },
// ];

// function Header(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <>
//       <Box
//         onClick={handleDrawerToggle}
//         sx={{ backgroundColor: "black", color: "white" }}
//       >
//         <List>
//           <Link href="/whole" underline="none">
//             <Typography variant="h6" color="white" sx={{ ml: 1.5 }}>
//               WHOLESALE
//             </Typography>
//           </Link>
//           {navItems.map((item, index) => (
//             <ListItem key={item.id} disablePadding>
//               <Link href={item.link} underline="none" color="white">
//                 <ListItemButton>
//                   <ListItemText primary={item.name} />
//                 </ListItemButton>
//               </Link>
//             </ListItem>
//           ))}
//         </List>
//       </Box>
//       <Navbar />
//     </>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   //Functions for Second Navbar
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   //One
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   //Two
//   const open1 = Boolean(anchorEl);
//   const handleClick1 = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose1 = () => {
//     setAnchorEl(null);
//   };
//   //Three
//   const open2 = Boolean(anchorEl);
//   const handleClick2 = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose2 = () => {
//     setAnchorEl(null);
//   };
//   //Four
//   const open3 = Boolean(anchorEl);
//   const handleClick3 = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose3 = () => {
//     setAnchorEl(null);
//   };
//   const buttonStyles = {
//     fontSize: "20px",
//     fontWeight: 600,
//     letterSpacing: "-1px",

//     "&:hover": {
//       color: "red",
//     },
//   };

//   return (
//     <Box sx={{ display: "block" }}>
//       <CssBaseline />
//       <AppBar
//         component="nav"
//         position="static"
//         sx={{ backgroundColor: "#000", px: 2 }}
//       >
//         <Toolbar>
//           <Grid display={{ sm: "none", lg: "none" }}>
//             <Grid
//               item
//               sx={{
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 p: 1,
//               }}
//             >
//               <Grid item xs={8} sm={8}>
//                 <Link href="https://www.royalapparel.net/index">
//                   <Box
//                     sx={{
//                       width: "70%",
//                     }}
//                     component="img"
//                     alt="Cuircon International"
//                     src={require("../../../assets/logo.jpg")}
//                   />
//                 </Link>
//               </Grid>
//               <Grid item xs={4} sm={4}>
//                 <Link href="/" underline="none" color="white">
//                   <Typography component="div">WHOLESALE</Typography>
//                 </Link>
//               </Grid>
//             </Grid>
//           </Grid>
//           {/* <Grid item lg={4} md={7}>
//             <Link href="https://www.royalapparel.net/index">
//               <Box
//                 sx={{
//                   width: "50%",
//                 }}
//                 component="img"
//                 alt="Cuircon International"
//                 src={require("../../../assets/logo.jpg")}
//               />
//             </Link>
//           </Grid> */}
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ marginLeft: "auto", display: { sm: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>

//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
//           >
//             WHOLESALE
//           </Typography>
//           <Box sx={{ display: { xs: "none", sm: "block" } }}>
//             {navItems.map((item, index) => (
//               <Button key={item.id} sx={{ color: "#fff" }}>
//                 {item.name}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           anchor="top"
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block ms-auto", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//       {/* Image
//       Header */}
//       {/*  */}
//       {/*  */}
//       <Grid container spacing={1} display={{ xs: "none", md: "block" }}>
//         <Grid
//           item
//           lg={12}
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "center",
//             p: 1,
//           }}
//         >
//           <Grid item lg={4} md={7}>
//             <Link href="https://www.royalapparel.net/index">
//               <Box
//                 sx={{
//                   width: "90%",
//                 }}
//                 component="img"
//                 alt="Cuircon International"
//                 src={require("../../../assets/logo.jpg")}
//               />
//             </Link>
//           </Grid>

//           <Grid
//             item
//             lg={4}
//             display={{ md: "block", sm: "none" }}
//             sx={{
//               borderLeft: "2px solid gray",
//               // backgroundColor: "red",
//             }}
//           >
//             <Typography
//               variant="h3"
//               sx={{
//                 color: "gray",
//                 ml: 4,
//               }}
//             >
//               ECO
//             </Typography>
//           </Grid>
//           <Grid item lg={4} md={5}>
//             <Box>
//               <TextField
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="end">
//                       <SearchIcon sx={{ color: "#000" }} />
//                     </InputAdornment>
//                   ),
//                 }}
//                 placeholder="SEARCH"
//                 id="search"
//                 type="search"
//                 size="small"
//                 sx={{
//                   backgroundColor: "#D3D3D3",
//                   borderRadius: 1,
//                 }}
//               />
//             </Box>
//           </Grid>
//         </Grid>
//       </Grid>
//       {/* <Grid>
//         <Grid
//           item
//           lg={7}
//           xs={10}
//           sm={10}
//           md={10}
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//           }}
//         >
//           {menu.map((items, index) => (
//             <Grid item lg={2.5} xs={2} sm={2} md={2.5} key={items.id}>
//               <Button
//                 id="fade-button"
//                 color="inherit"
//                 sx={buttonStyles}
//                 aria-controls={open ? "fade-menu" : undefined}
//                 aria-haspopup="true"
//                 aria-expanded={open ? "true" : undefined}
//                 onClick={handleClick}
//               >
//                 {items.name}
//               </Button>
//               <Menu
//                 id="fade-menu"
//                 MenuListProps={{
//                   "aria-labelledby": "fade-button",
//                 }}
//                 anchorEl={anchorEl}
//                 open={open}
//                 onClose={handleClose}
//                 TransitionComponent={Fade}
//                 sx={{ width: "100%" }}
//               >
//                 <MenuItem onClick={handleClose}>Profile</MenuItem>
//                 <MenuItem onClick={handleClose}>My account</MenuItem>
//                 <MenuItem onClick={handleClose}>Logout</MenuItem>
//               </Menu>
//             </Grid>
//           ))}
//         </Grid>
//       </Grid> */}
//       {/* <Navbar /> */}
//       {/* Screens
//       //Header
//         Navigation */}
//       {/* <Grid container>
//         <Grid
//           item
//           lg={7}
//           xs={10}
//           sm={10}
//           md={10}
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//           }}
//         >
//           {menu.map((items, index) => (
//             <Grid item lg={2.5} xs={2} sm={2} md={2.5} key={items.id}>
//               <Button
//                 id="fade-button"
//                 color="inherit"
//                 sx={buttonStyles}
//                 aria-controls={open ? "fade-menu" : undefined}
//                 aria-haspopup="true"
//                 aria-expanded={open ? "true" : undefined}
//                 onClick={handleClick}
//               >
//                 {items.name}
//               </Button>
//               <Menu
//                 id="fade-menu"
//                 MenuListProps={{
//                   "aria-labelledby": "fade-button",
//                 }}
//                 anchorEl={anchorEl}
//                 open={open}
//                 onClose={handleClose}
//                 TransitionComponent={Fade}
//                 sx={{ width: "100%" }}
//               >
//                 <MenuItem onClick={handleClose}>Profile</MenuItem>
//                 <MenuItem onClick={handleClose}>My account</MenuItem>
//                 <MenuItem onClick={handleClose}>Logout</MenuItem>
//               </Menu>
//             </Grid>
//           ))}
//         </Grid>
//       </Grid> */}
//     </Box>
//   );
// }

// export default Header;
