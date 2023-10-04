import React from "react";
import { Box, Link, Typography } from "@mui/material";

import { SiPinterest } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { TbBrandTiktokFilled } from "react-icons/tb";

const Social = () => {
  return (
    <Box
      sx={{
        display: "block",
        alignItems: "center",
        my: "50px",
        mx: "70px",
        width: "90%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: 3,
          backgroundColor: "#000",
        }}
      />
      <Box
        sx={{
          display: "block",
          justifyContent: "center",
          my: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            py: "10px",
            width: "100%",
          }}
        >
          <Typography sx={{ fontSize: "25px", fontWeight: "400" }}>
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
            <SiPinterest color="#000" size={45} />
          </Link>
          <Link href="#">
            <RiInstagramFill color="#000" size={50} />
          </Link>
          <Link href="#">
            <BsFacebook color="#000" size={45} />
          </Link>

          <Link href="#">
            <TiSocialYoutubeCircular color="#000" size={58} />
          </Link>
          <Link href="#">
            <TbBrandTiktokFilled color="#000" size={50} />
          </Link>
          <Link href="#">
            <AiFillTwitterCircle color="#000" size={55} />
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: 3,
          backgroundColor: "#000",
        }}
      />
    </Box>
  );
};

export default Social;
