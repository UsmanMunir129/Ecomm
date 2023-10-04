import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  Link,
  Typography,
  ThemeProvider,
  TextField,
  Button,
} from "@mui/material";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: " Georgia, serif",
      fontWeight: "bold",
      textTransform: "uppercase",
      //   lineHeight: 2,
    },
  },
  link: {
    allVariants: {
      textDecoration: "none",

      color: "#000",
      fontSize: 15,
      fontFamily: "Helvetica,quicksand,Helvetica Neue, Arial, sans-serif",
    },
  },
});
export default function BasicGrid() {
  const buttonStyles = {
    display: "flex",
    flexDirection: "column",
  };
  return (
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
  );
}
