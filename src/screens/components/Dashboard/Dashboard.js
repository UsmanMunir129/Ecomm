import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";

//Importing Screens
import Social from "./Social";
import CarouselTop from "./CarouselTop";
import Endslider from "./Endslider";
import Trusted from "../Trusted";
import Services from "../Services";

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
    margin: "30px 0px 30px 0px",
    // backgroundColor: "black",
  },
  imgCont: {
    padding: 10,
    // backgroundColor: "red",
    height: "100%",
  },
  imgbox: {
    borderRadius: 8,
    width: 300,
    height: 300,
  },
});

const Dashboard = () => {
  const classes = useStyles();
  return (
    <>
      {/* //Screen */}
      <CarouselTop />
      <Grid container className={classes.mainCont}>
        {images.map((step, index) => (
          <Grid item lg={3} md={6} xs={12} sm={6} align="center">
            <Box className={classes.imgCont}>
              <Link href="#">
                <img
                  component="img-fluid"
                  alt="Cuircon International"
                  src={step.imgPath}
                  className={classes.imgbox}
                />
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* //Screens  
      ..
      ...
       */}
      <Social />
      <Trusted />
      <Endslider />

      <Services />
      {/* <CarouselEnd /> */}
    </>
  );
};

export default Dashboard;
