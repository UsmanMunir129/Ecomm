import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";

//Importing Screens
import Social from "./Social";
import Endstepper from "./Endstepper";

const useStyles = makeStyles({
  mainCont: {
    width: "85%",
    borderRadius: 4,
    height: "85%",
    mx: 5,
    mt: 5,
  },
  imgCont: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    margin: "auto",
  },
});

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

const Dashboard = () => {
  const linkStyles = {
    width: "85%",
    borderRadius: 4,
    height: "85%",
    mx: 5,
    mt: 5,
  };
  const mainCont = {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    margin: "auto",
  };

  return (
    <>
      <Grid container sx={mainCont}>
        {images.map((step, index) => (
          <Grid item lg={6} md={6} xs={12} sm={12}>
            <Link href="#">
              <Box
                sx={linkStyles}
                component="img"
                alt="Cuircon International"
                src={step.imgPath}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
      {/* //Screens  */}
      <Social />
      <Endstepper />
    </>
  );
};

export default Dashboard;
