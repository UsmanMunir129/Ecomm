import { Grid } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

const Nav = () => {
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
  return (
    <Grid container>
      <Grid item lg={6} sx={{ display: "flex", flexDirection: "row" }}>
        <Grid item lg={3}>
          <Button
            id="fade-button"
            color="inherit"
            sx={{ fontSize: "20px", fontWeight: 800, letterSpacing: "-1px" }}
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
        <Grid item lg={3}>
          <Button
            id="fade-button"
            color="inherit"
            sx={{ fontSize: "20px", fontWeight: 800, letterSpacing: "-1px" }}
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
        <Grid item lg={3}>
          <Button
            id="fade-button"
            color="inherit"
            sx={{ fontSize: "20px", fontWeight: 800, letterSpacing: "-1px" }}
            aria-controls={open2 ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open2 ? "true" : undefined}
            onClick={handleClick2}
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
            onClose={handleClose2}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose2}>Profile</MenuItem>
            <MenuItem onClick={handleClose2}>My account</MenuItem>
            <MenuItem onClick={handleClose2}>Logout</MenuItem>
          </Menu>
        </Grid>
        <Grid item lg={3}>
          <Button
            id="fade-button"
            color="inherit"
            sx={{ fontSize: "20px", fontWeight: 800, letterSpacing: "-1px" }}
            aria-controls={open3 ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open3 ? "true" : undefined}
            onClick={handleClick3}
          >
            Renta Kart
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
      </Grid>
      <Grid item lg={6}></Grid>
    </Grid>
  );
};

export default Nav;
