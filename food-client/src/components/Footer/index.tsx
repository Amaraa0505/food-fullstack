import React from "react";
import { Grid, Button, Link, Stack } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      sx={{ backgroundColor: "#00c853" }}
      justifyContent={"center"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={10}
      padding={10}
    >
      <Stack>
        <Link color={"#fafafa"}>Food Delivery</Link>
      </Stack>
      <Stack direction={"row"} display={"flex"} spacing={20}>
        <Link color={"#fafafa"}>Нүүр</Link>
        <Link color={"#fafafa"}>Холбоо барих</Link>
        <Link color={"#fafafa"}>Хоолны цэс</Link>
        <Link color={"#fafafa"}>Үйлчилгээний нөхцөл</Link>
        <Link color={"#fafafa"}>Хүргэлтийн бус</Link>
        <Link color={"#fafafa"}>Нууцлалын бодлого</Link>
      </Stack>
      <Stack direction={"row"} display={"flex"} spacing={5}>
        <img src="facebook.svg"></img>
        <img src="instagram.svg"></img>
        <img src="twitter.svg"></img>
      </Stack>
      <hr className="horizon"></hr>
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Grid item color={"#fafafa"}>
          @ 2024 Pinecone Foods LLC{" "}
        </Grid>
        <Grid item color={"#fafafa"}>
          Зохиогчийн эрх хуулиар хамгаалагдсан.
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
