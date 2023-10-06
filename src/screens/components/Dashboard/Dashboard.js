import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Link } from "@mui/material";
import Social from "./Social";
import Endstepper from "./Endstepper";

const Dashboard = () => {
  const linkStyles = {
    width: "85%",
    borderRadius: 4,
    height: "85%",
    mx: 5,
    mt: 5,
  };

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "80%",
          margin: "auto",
        }}
      >
        <Grid item lg={6} md={6} xs={12} sm={12}>
          <Link href="#">
            <Box
              sx={linkStyles}
              component="img"
              alt="Cuircon International"
              src={require("../../../assets/kids.jpg")}
            />
          </Link>
        </Grid>
        <Grid item lg={6} md={6} xs={12} sm={12}>
          <Link href="#">
            <Box
              sx={linkStyles}
              component="img"
              alt="Cuircon International"
              src={require("../../../assets/kids.jpg")}
            />
          </Link>
        </Grid>
        <Grid item lg={6} md={6} xs={12} sm={12}>
          <Link href="#">
            <Box
              sx={linkStyles}
              component="img"
              alt="Cuircon International"
              src={require("../../../assets/kids.jpg")}
            />
          </Link>
        </Grid>
        <Grid item lg={6} md={6} xs={12} sm={12}>
          <Link href="#">
            <Box
              sx={linkStyles}
              component="img"
              alt="Cuircon International"
              src={require("../../../assets/kids.jpg")}
            />
          </Link>
        </Grid>
      </Grid>
      <Social />
      <Endstepper />
    </>
  );
};

export default Dashboard;
