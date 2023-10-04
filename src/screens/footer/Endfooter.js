import * as React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import { Link, Typography } from "@mui/material";

export default function Endfooter() {
  const buttonStyles = {
    color: "#fff",
    fontWeight: "bold",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  };
  return (
    <Grid
      container
      lg={12}
      xs={12}
      sx={{
        flexGrow: 1,
        mt: 5,
        width: "100%",
        backgroundColor: "#000",
        py: 1.3,
        justifyContent: "center",
      }}
    >
      <Typography sx={{ color: "#fff", fontWeight: "bold" }}>
        Curicon 2023 |{" "}
        <Link href="#" sx={buttonStyles}>
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link href="#" sx={buttonStyles}>
          Terms & Conditions
        </Link>{" "}
        |{" "}
        <Link href="#" sx={buttonStyles}>
          Sitemap
        </Link>
      </Typography>
    </Grid>
  );
}
