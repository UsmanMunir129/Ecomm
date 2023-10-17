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
          variant="h2"
          sx={{
            fontSize: { xs: "13px", sm: "20px", md: "24px" },
            fontFamily: " Garamond",
            fontWeight: "bold",
            textAlign: "center",
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
          <SiPinterest color="#000" size={xs ? 28 : 48} />
        </Link>
        <Link href="#">
          <TiSocialInstagramCircular color="#000" size={xs ? 38 : 61} />
        </Link>
        <Link href="#">
          <BsFacebook color="#000" size={xs ? 28 : 48} />
        </Link>

        <Link href="#">
          <TiSocialYoutubeCircular color="#000" size={xs ? 38 : 61} />
        </Link>
        <Link href="#">
          <TbBrandTiktokFilled color="#000" size={xs ? 30 : 53} />
        </Link>
        <Link href="#">
          <AiFillTwitterCircle color="#000" size={xs ? 33 : 56} />
        </Link>
      </Box>
    </Box>
  );
};

export default Social;
