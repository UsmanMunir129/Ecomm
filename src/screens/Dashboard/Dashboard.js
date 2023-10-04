import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Link } from "@mui/material";

const Dashboard = () => {
  const imgStyles = {
    justifyContent: "center",
  };
  const linkStyles = {
    width: "100%",
    borderRadius: 4,
  };

  return (
    <Grid
      container
      spacing={1}
      sx={{
        display: "flex",
        flexDirection: "row",

        px: 10,
        py: 5,
      }}
    >
      <Grid item lg={6} md={6} xs={12} sm={12} sx={imgStyles}>
        <Link href="#">
          <Box
            sx={linkStyles}
            component="img"
            alt="Cuircon International"
            src={require("../../assets/kids.jpg")}
          />
        </Link>
      </Grid>
      <Grid item lg={6} md={6} xs={12} sm={12} sx={imgStyles}>
        <Link href="#">
          <Box
            sx={linkStyles}
            component="img"
            alt="Cuircon International"
            src={require("../../assets/kids.jpg")}
          />
        </Link>
      </Grid>
      <Grid item lg={6} md={6} xs={12} sm={12} sx={imgStyles}>
        <Link href="#">
          <Box
            sx={linkStyles}
            component="img"
            alt="Cuircon International"
            src={require("../../assets/kids.jpg")}
          />
        </Link>
      </Grid>
      <Grid item lg={6} md={6} xs={12} sm={12} sx={imgStyles}>
        <Link href="#">
          <Box
            sx={linkStyles}
            component="img"
            alt="Cuircon International"
            src={require("../../assets/kids.jpg")}
          />
        </Link>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
