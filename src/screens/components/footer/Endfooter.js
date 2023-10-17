import * as React from "react";

import Grid from "@mui/material/Grid";
import { Link, Typography } from "@mui/material";

export default function Endfooter() {
  const buttonStyles = {
    color: "#fff",
    px: 1,

    borderLeft: "2px solid white",
    fontSize: { xs: "8px", sm: "12px", md: "14px", lg: "16px" },
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  };
  const text = {
    color: "white",
    fontSize: { xs: "8px", sm: "12px", md: "14px", lg: "16px" },
    px: 1,
  };
  return (
    <Grid
      container
      item
      lg={12}
      xs={12}
      sx={{
        flexGrow: 1,
        mt: 3,
        width: "100%",
        backgroundColor: "#000",
        py: 1,
        justifyContent: "center",
      }}
    >
      <Typography sx={text}>Curicon 2023 </Typography>
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
