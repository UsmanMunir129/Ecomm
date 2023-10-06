import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

function Endstepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const imgStyles = {
    height: 270,
    width: "20%",
    margin: "auto",
  };
  const contStyles = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  };
  return (
    <Box
      sx={{
        width: "95%",
        display: "flex",
        flexDirection: "row",
        margin: "auto",
        my: 5,
      }}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        <Box sx={contStyles}>
          <Box
            component="img"
            sx={imgStyles}
            alt="Cuircon"
            src={require("../../../assets/kids.jpg")}
          />
          <Box
            component="img"
            sx={imgStyles}
            alt="Cuircon"
            src={require("../../../assets/kids.jpg")}
          />
          <Box
            component="img"
            sx={imgStyles}
            alt="Cuircon"
            src={require("../../../assets/logo.jpg")}
          />
          <Box
            component="img"
            sx={imgStyles}
            alt="Cuircon"
            src={require("../../../assets/kids.jpg")}
          />
        </Box>
        <Box sx={contStyles}>
          <Box
            component="img"
            sx={imgStyles}
            alt="Cuircon"
            src={require("../../../assets/kids.jpg")}
          />
          <Box
            component="img"
            sx={imgStyles}
            alt="Cuircon"
            src={require("../../../assets/kids.jpg")}
          />
          <Box
            component="img"
            sx={imgStyles}
            alt="Cuircon"
            src={require("../../../assets/logo.jpg")}
          />
          <Box
            component="img"
            sx={imgStyles}
            alt="Cuircon"
            src={require("../../../assets/kids.jpg")}
          />
        </Box>
      </AutoPlaySwipeableViews>

      {/* <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <Box
            component="img"
            sx={{
              height: 270,
              width: "100%",
              overflow: "hidden",
            }}
            src={step.imgPath}
            alt={step.label}
            square
          />
        ))}
      </AutoPlaySwipeableViews> */}
    </Box>
  );
}

export default Endstepper;
