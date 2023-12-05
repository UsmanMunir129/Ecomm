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
    link: "/About",
  },
  {
    id: 2,
    name: "Our Team",
    link: "/Team",
  },
  {
    id: 3,
    name: "Social",
    link: "/Social",
  },
  {
    id: 4,
    name: "Go Green",
    link: "/Go",
  },
];
const contactSec1 = [
  {
    id: 1,
    name: "View Catalog",
    link: [require("../../newdoc.pdf")],
  },
  {
    id: 2,
    name: "Fabric Info",
    link: "/Fabric",
  },
  {
    id: 3,
    name: "Colors",
    link: "/Colors",
  },
  {
    id: 4,
    name: "Made in USA",
    link: "/Made",
  },
];
const contactSec2 = [
  {
    id: 1,
    name: "Create Account",
    link: "/Create",
  },
  {
    id: 2,
    name: "Contact Us",
    link: "/Contactus",
  },
  {
    id: 3,
    name: "Track Orders",
    link: "/Track",
  },
  {
    id: 4,
    name: "Help Center",
    link: "/Help",
  },
];

const theme = createTheme();

export default function Contact() {
  const buttonStyles = {
    display: "flex",
    flexDirection: "column",
  };
  const titleStyles = {
    color: "#000",
    fontSize: "20px",
    fontWeight: "bold",
    // typography: {
    //   fontFamily: ["Roboto", '"Helvetica Neue"', "sans-serif"],
    // },
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
    fontSize: "16px",
    fontWeight: "600",
    "&:hover": {
      textDecoration: "underline",
      color: "gray",
      fontWeight: "bold",
    },
  };
  const textboxStyles = { py: 0.5, width: "fit-content" };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            flexGrow: 1,
            px: 3,
            py: 3,
            borderTop: "3px solid gray",
            marginTop: 10,
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={6} sm={6} md={3} lg={3} xl={3} sx={buttonStyles}>
              <Typography sx={titleStyles}>Company</Typography>
              <Box>
                {contactSec.map((items, index) => (
                  <Box key={items.id} sx={textboxStyles}>
                    <Link href={items.link} underline="none">
                      <Typography sx={textStyles}>{items.name}</Typography>
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3} xl={3} sx={buttonStyles}>
              <Typography sx={titleStyles}>Product Info</Typography>
              {contactSec1.map((items, index) => (
                <Box key={items.id} sx={textboxStyles}>
                  <Link href={items.link} underline="none">
                    <Typography sx={textStyles}>{items.name}</Typography>
                  </Link>
                </Box>
              ))}
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3} xl={3} sx={buttonStyles}>
              <Typography sx={titleStyles}>Work With Us</Typography>
              {contactSec2.map((items, index) => (
                <Box key={items.id} sx={textboxStyles}>
                  <Link href={items.link} underline="none">
                    <Typography sx={textStyles}>{items.name}</Typography>
                  </Link>
                </Box>
              ))}
            </Grid>
            <Grid item lg={3} sm={6} md={3} xs={6} xl={3} sx={buttonStyles}>
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

      {/* Footer Comp */}
      <Endfooter />
    </>
  );
}
