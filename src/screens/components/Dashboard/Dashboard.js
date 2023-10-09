import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";

//Importing Screens
import Social from "./Social";
import Endstepper from "./Endstepper";

const images = [
  {
    link: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    link: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    link: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    link: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];
const useStyles = makeStyles({
  mainCont: {
    // width: "70% !important",
    // backgroundColor: "red",
    padding: 50,
  },
  imgCont: {
    // backgroundColor: "black",
    // margin: "0 30px 0 30px",
    paddingBottom: 10,
    width: "80%",
  },
  imgbox: {
    borderRadius: 8,
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});

const Dashboard = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        spacing={1}
        className={classes.mainCont}
        // direction="column"
        // justify="center"
      >
        {images.map((step, index) => (
          <Grid item lg={6} md={6} xs={12} sm={12} align="center">
            <Box className={classes.imgCont}>
              <Link href="#">
                <img
                  component="img"
                  alt="Cuircon International"
                  src={step.imgPath}
                  className={classes.imgbox}
                />
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* //Screens  */}
      {/* <Social /> */}
      <Endstepper />
    </>
  );
};

export default Dashboard;
