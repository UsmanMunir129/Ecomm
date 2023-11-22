import Carousel from "react-bootstrap/Carousel";
import "./CarouselTop.css";

const images = [
  {
    link: "/ll",
    imgPath: [require("../../../assets/carsl1.jpg")],
  },
  {
    link: "/s",
    imgPath: [require("../../../assets/carsl2.jpg")],
  },
  {
    link: "/e",
    imgPath: [require("../../../assets/carsl3.jpg")],
  },
  {
    link: "/w",
    imgPath: [require("../../../assets/carsl4.jpg")],
  },
];
function CarouselTop() {
  return (
    <div class="carousel1">
      <Carousel id="catalogueCarousel1" data-bs-theme="light">
        {images.map((step, index) => (
          <Carousel.Item interval={3000}>
            <a href={step.link}>
              <img
                id="image"
                className="img-fluid w-100"
                src={step.imgPath}
                alt="Curicon"
              />
            </a>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselTop;

// import * as React from "react";
// import { useTheme } from "@mui/material/styles";

// import Box from "@mui/material/Box";
// import MobileStepper from "@mui/material/MobileStepper";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import Button from "@mui/material/Button";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import SwipeableViews from "react-swipeable-views";
// import { autoPlay } from "react-swipeable-views-utils";

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     imgPath: "../images/C1.jpg",
//   },
//   {
//     imgPath: "../images/C2.jpg",
//   },
//   {
//     imgPath: "../images/C3.jpg",
//   },
//   {
//     imgPath: "../images/C4.jpg",
//   },
// ];

// function FirstStepper() {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   return (
//     <Box sx={{ Width: "100%", flexGrow: 1 }}>
//       <AutoPlaySwipeableViews
//         axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//         index={activeStep}
//         onChangeIndex={handleStepChange}
//         enableMouseEvents
//       >
//         {images.map((step, index) => (
//           <Box
//             component="img"
//             sx={{
//               display: "block",

//               width: "100%",
//             }}
//             src={step.imgPath}
//           />
//         ))}
//       </AutoPlaySwipeableViews>
//       <MobileStepper
//         steps={maxSteps}
//         position="absolute"
//         activeStep={activeStep}
//         nextButton={
//           <Button
//             size="small"
//             onClick={handleNext}
//             disabled={activeStep === maxSteps - 1}
//             sx={{ color: "gray" }}
//           >
//             {theme.direction === "rtl" ? (
//               <KeyboardArrowLeft />
//             ) : (
//               <KeyboardArrowRight />
//             )}
//           </Button>
//         }
//         backButton={
//           <Button
//             size="xlarge"
//             onClick={handleBack}
//             disabled={activeStep === 0}
//             sx={{ color: "gray" }}
//           >
//             {theme.direction === "rtl" ? (
//               <KeyboardArrowRight />
//             ) : (
//               <KeyboardArrowLeft />
//             )}
//           </Button>
//         }
//       />
//     </Box>
//   );
// }

// export default FirstStepper;