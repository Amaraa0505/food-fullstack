import React from "react";
import { Box, Grid, Button, Typography } from "@mui/material";

const HomeHeader = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#18BA51",
        width: "100%",
        display: "flex",
        position: "relative",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 27,
          ml: 30,
        }}
      >
        <Typography
          sx={{ color: "white", fontSize: 38, fontWeight: 600, width: 260 }}
        >
          Pinecone Food delivery
        </Typography>
        <hr className="horizontal"></hr>
        <Typography sx={{ color: "white" }}>
          Horem ipsum delor amet consectetur adipiscing elit
        </Typography>
      </Grid>
      <Grid sx={{ padding: 18 }}>
        <img
          src="food.svg"
          style={{ width: 200, height: 200, position: "absolute" }}
        ></img>
        <img
          src="food2.svg"
          style={{
            width: 150,
            height: 150,
            position: "absolute",
            left: 900,
            top: 130,
          }}
        ></img>
      </Grid>
    </Box>
  );
};

export default HomeHeader;
