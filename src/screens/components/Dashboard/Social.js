import React from "react";
import { Box, Link, Typography } from "@mui/material";

import { SiPinterest } from "react-icons/si";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { TbBrandTiktokFilled } from "react-icons/tb";

const Social = () => {
  return (
    <Box
      sx={{
        display: "block",
        borderTop: "3px solid black",
        borderBottom: "3px solid black",
        width: "80%",
        margin: "auto",
        py: 8.2,
        my: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          margin: "auto",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
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
          <TiSocialInstagramCircular color="#000" size={58} />
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
          <AiFillTwitterCircle color="#000" size={53} />
        </Link>
      </Box>
    </Box>
  );
};

export default Social;
