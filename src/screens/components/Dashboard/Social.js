import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { SiPinterest } from "react-icons/si";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { TbBrandTiktokFilled } from "react-icons/tb";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    display: "block",
    borderTop: "4px solid black",
    borderBottom: "4px solid black",
    width: "90%",
    margin: "auto",
    padding: 80,
  },
});

const Social = () => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("sm"));

  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          margin: "auto",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "9px", sm: "16px", md: "18px" },
            fontFamily: " Garamond",
          }}
        >
          CONNECT WITH US ON SOCIAL MEDIA
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link href="#">
          <SiPinterest color="#000" size={xs ? 25 : 45} />
        </Link>
        <Link href="#">
          <TiSocialInstagramCircular color="#000" size={xs ? 38 : 58} />
        </Link>
        <Link href="#">
          <BsFacebook color="#000" size={xs ? 25 : 45} />
        </Link>

        <Link href="#">
          <TiSocialYoutubeCircular color="#000" size={xs ? 38 : 58} />
        </Link>
        <Link href="#">
          <TbBrandTiktokFilled color="#000" size={xs ? 30 : 50} />
        </Link>
        <Link href="#">
          <AiFillTwitterCircle color="#000" size={xs ? 33 : 53} />
        </Link>
      </Box>
    </Box>
  );
};

export default Social;
