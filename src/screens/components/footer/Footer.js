import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link, Typography, TextField, Button } from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Endfooter from "./Endfooter";

const theme = createTheme();

theme.typography.h6 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.3rem",
  },
  fontFamily: "Raleway, Arial",
};

export default function Footer() {
  const buttonStyles = {
    display: "flex",
    flexDirection: "column",
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1, mt: 7, mx: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={6} lg={3} sx={buttonStyles}>
              <Typography variant="h6">Company</Typography>
              <Link underline="hover" href="#">
                About Us
              </Link>
              <Link href="#">Our Team</Link>
              <Link href="#">Social Responsibility</Link>
              <Link href="#">Go Green</Link>
            </Grid>
            <Grid item xs={6} lg={3} sx={buttonStyles}>
              <Typography variant="h6">Product Info</Typography>
              <Link href="#">View Catalog</Link>
              <Link href="#">Fabric Information</Link>
              <Link href="#">Colors</Link>
              <Link href="#">Made in USA</Link>
            </Grid>
            <Grid item xs={6} lg={3} sx={buttonStyles}>
              <Typography variant="h6">Work with us</Typography>
              <Link href="#">Create An Account</Link>
              <Link href="#">Contact Us</Link>
              <Link href="#">Track Orders</Link>
              <Link href="#">Help Center</Link>
            </Grid>
            <Grid item lg={3} xs={6} sx={buttonStyles}>
              <Typography variant="h6">Subscribe</Typography>
              <Box sx={{ my: 1, width: "80%", height: "5%" }}>
                <TextField
                  id="outlined-basic"
                  label="Email*"
                  size="small"
                  variant="outlined"
                />
                <Button
                  sx={{
                    color: "	#696969",
                    textTransform: "none",
                    fontSize: 12,
                    border: "1px solid #696969",
                    fontFamily: "sans-serif",
                    backgroundColor: "#E0E0E0",
                    my: 1,
                  }}
                  type="submit"
                  size="medium"
                >
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
