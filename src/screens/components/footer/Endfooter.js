import * as React from "react";

import Grid from "@mui/material/Grid";
import { Link, Typography } from "@mui/material";

export default function Endfooter() {
  const buttonStyles = {
    color: "#fff",
    px: 1,
    borderLeft: "2px solid white",
    fontSize: { xs: "2px", sm: "2px", md: "14px", lg: "16px" },
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  };
  const text = {
    color: "white",
    fontSize: { xs: "2px", sm: "2px", md: "14px", lg: "16px" },
    px: 1,
  };
  return (
    <Grid
      container
      item
      lg={12}
      md={12}
      sm={12}
      xs={12}
      xl={12}
      sx={{
        flexGrow: 1,
        mt: 3,
        width: "100%",
        backgroundColor: "#000",
        py: 1,
        justifyContent: "center",
      }}
    >
      <Typography sx={text}>Curicon 2024 </Typography>
      <Link href="#" underline="none">
        <Typography sx={buttonStyles}>Privacy Policy </Typography>
      </Link>
      <Link href="#" underline="none">
        <Typography sx={buttonStyles}> Terms & Conditions </Typography>
      </Link>
      <Link href="#" underline="none">
        <Typography sx={buttonStyles}> Sitemap</Typography>
      </Link>
    </Grid>
  );
}
