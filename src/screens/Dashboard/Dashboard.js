import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Grid container>
      <Grid
        container
        item
        lg={12}
        spacing={2}
        sx={{ display: "flex", flexDirection: "row", px: "80px" }}
      >
        <Grid item lg={6} md={6} xs={12} sm={12}>
          <Box
            sx={{
              width: "100%",
            }}
            component="img"
            alt="Cuircon International"
            src={require("../../assets/kids.jpg")}
          />
        </Grid>
        <Grid item lg={6} md={6} xs={12} sm={12}>
          <Box
            sx={{
              width: "100%",
            }}
            component="img"
            alt="Cuircon International"
            src={require("../../assets/kids.jpg")}
          />
        </Grid>
      </Grid>
      <Grid
        container
        item
        lg={12}
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          px: "80px",
        }}
      >
        <Grid item lg={6} md={6} xs={12} sm={12}>
          <Box
            sx={{
              width: "100%",
            }}
            component="img"
            alt="Cuircon International"
            src={require("../../assets/kids.jpg")}
          />
        </Grid>
        <Grid item lg={6} md={6} xs={12} sm={12}>
          <Box
            sx={{
              width: "100%",
            }}
            component="img"
            alt="Cuircon International"
            src={require("../../assets/kids.jpg")}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
