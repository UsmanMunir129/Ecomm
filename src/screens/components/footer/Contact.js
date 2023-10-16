import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link, Typography, TextField, Button } from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Endfooter from "./Endfooter";

const contactSec = [
  {
    id: 1,
    name: "About Us",
    link: "/about",
  },
  {
    id: 2,
    name: "Our Team",
    link: "/about",
  },
  {
    id: 3,
    name: "Social",
    link: "/about",
  },
  {
    id: 4,
    name: "Go Green",
    link: "/about",
  },
];
const contactSec1 = [
  {
    id: 1,
    name: "View Catalog",
    link: "/about",
  },
  {
    id: 2,
    name: "Fabric Info",
    link: "/about",
  },
  {
    id: 3,
    name: "Colors",
    link: "/about",
  },
  {
    id: 4,
    name: "Made in USA",
    link: "/about",
  },
];
const contactSec2 = [
  {
    id: 1,
    name: "Create Account",
    link: "/about",
  },
  {
    id: 2,
    name: "Contact Us",
    link: "/about",
  },
  {
    id: 3,
    name: "Track Orders",
    link: "/about",
  },
  {
    id: 4,
    name: "Help Center",
    link: "/about",
  },
];

const theme = createTheme();

// theme.typography.h6 = {
//   fontSize: "16px",
//   "@media (min-width:600px)": {
//     fontSize: "1.1rem",
//   },
//   [theme.breakpoints.up("md")]: {
//     fontSize: "1.3rem",
//   },
//   fontFamily: "Helvetica",
// };

export default function Contact() {
  const buttonStyles = {
    display: "flex",
    flexDirection: "column",
  };
  const titleStyles = {
    color: "#000",
    fontFamily: '"Helvetica "',
    fontSize: "20px",
    fontWeight: "bold",
    lineHeight: 2,
  };
  const submitStyles = {
    color: "	#696969",
    textTransform: "none",
    fontSize: 12,
    border: "1px solid #696969",
    fontFamily: "sans-serif",
    backgroundColor: "#E0E0E0",
    my: 1,
  };
  const textStyles = {
    color: "black",
    fontFamily: "unset",
    fontSize: "16px",
    fontWeight: 400,
    "&:hover": {
      textDecoration: "underline",
      color: "gray",
      fontWeight: "bold",
    },
  };
  const textboxStyles = { py: 0.5, width: "40%" };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1, px: 3, py: 3, borderTop: "3px solid gray" }}>
          <Grid container spacing={1}>
            <Grid item xs={6} lg={3} sx={buttonStyles}>
              <Typography sx={titleStyles}>Company</Typography>
              <Box>
                {contactSec.map((items, index) => (
                  <Box sx={textboxStyles}>
                    <Link href={items.link} underline="none">
                      <Typography sx={textStyles}>{items.name}</Typography>
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={6} lg={3} sx={buttonStyles}>
              <Typography sx={titleStyles}>Product Info</Typography>
              {contactSec1.map((items, index) => (
                <Box sx={textboxStyles}>
                  <Link href={items.link} underline="none">
                    <Typography sx={textStyles}>{items.name}</Typography>
                  </Link>
                </Box>
              ))}
            </Grid>
            <Grid item xs={6} lg={3} sx={buttonStyles}>
              <Typography sx={titleStyles}>Work With Us</Typography>
              {contactSec2.map((items, index) => (
                <Box sx={textboxStyles}>
                  <Link href={items.link} underline="none">
                    <Typography sx={textStyles}>{items.name}</Typography>
                  </Link>
                </Box>
              ))}
            </Grid>
            <Grid item lg={3} xs={6} sx={buttonStyles}>
              <Typography sx={titleStyles}>Subscribe</Typography>
              <Box sx={{ my: 1, width: "60%", height: "5%" }}>
                <TextField
                  id="outlined-basic"
                  label="Email*"
                  size="small"
                  variant="outlined"
                />
                <Button sx={submitStyles} type="submit">
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
      <Endfooter />
    </>
  );
}
