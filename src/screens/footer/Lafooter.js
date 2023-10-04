import * as React from "react";

import Grid from "@mui/material/Grid";
import { Box, ThemeProvider } from "@mui/material";

const Lafooter = () => {
  return (
    <ThemeProvider>
      <Box>
        <Grid
          container
          sx={{ display: "flex", flexDirection: "row", backgroundColor: "red" }}
        >
          <Grid item lg={4}>
            aa
          </Grid>
          <Grid item lg={4}>
            aadddddddddd
          </Grid>
          <Grid item lg={4}>
            aa
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Lafooter;
