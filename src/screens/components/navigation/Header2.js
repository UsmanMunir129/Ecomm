import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

const Header2 = () => {
  return (
    <Grid xs={12} container spacing={1}>
      <Grid
        item
        lg={8}
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        spacing={2}
        xs={12}
      >
        <Grid item lg={5}>
          <Box
            sx={{
              width: "100%",
            }}
            component="img"
            alt="Cuircon International"
            src={require("../../../assets/logo.jpg")}
          />
        </Grid>
        <Grid
          sx={{ backgroundColor: "gray", height: "70%", ml: 4 }}
          lg={0.04}
        ></Grid>
        <Grid item lg={6.96} xs={0}>
          <Box
            sx={{
              fontSize: "40px",
              color: "gray",
              ml: 4,
            }}
          >
            ECO + USA
          </Box>
        </Grid>
      </Grid>
      <Grid
        item
        lg={4}
        xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Box>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ color: "#000" }} />
                </InputAdornment>
              ),
            }}
            placeholder="SEARCH"
            id="search"
            type="search"
            size="small"
            sx={{
              backgroundColor: "#D3D3D3",
              borderRadius: 2,
              border: "0px",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header2;

// import React from "react";
// import Box from "@mui/material/Box";
// import { Input } from "@mui/material";
// const Header2 = () => {
//   return (
//     <div
//       style={{
//         width: "100%",
//         alignItems: "center",
//         justifyContent: "center",
//         display: "flex",
//         flexDirection: "row",
//       }}
//     >
//       <Box
//         sx={{
//           width: "20%",
//         }}
//         component="img"
//         alt="Cuircon International"
//         src={require("../../assets/logo.jpg")}
//       />
//       <Box
//         sx={{
//           fontSize: "40px",
//           color: "gray",
//           ml: 25,
//         }}
//       >
//         ECO + USA
//       </Box>
//       <Input sx={{ marginLeft: 30 }} placeholder="SEARCH" />
//     </div>
//   );
// };

// export default Header2;
