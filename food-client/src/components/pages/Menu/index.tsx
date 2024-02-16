"use client";
import React from "react";
import { Button, Box, Grid, Stack } from "@mui/material";

const Menu = () => {
  return (
    <Box sx={{ my: 15 }}>
      <Grid
        direction={"row"}
        sx={{
          justifyContent: "center",
          display: "flex",
          gap: 15,
          my: 10,
        }}
      >
        <Button sx={{ color: "black", border: 1, width: 250, borderRadius: 3 }}>
          Main course
        </Button>
        <Button sx={{ color: "black", border: 1, width: 250, borderRadius: 3 }}>
          Appetizers
        </Button>
        <Button sx={{ color: "black", border: 1, width: 250, borderRadius: 3 }}>
          Beverage
        </Button>
        <Button sx={{ color: "black", border: 1, width: 250, borderRadius: 3 }}>
          On sale
        </Button>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "space-around", mx: 28 }}>
        <img src="egg.svg"></img>
        <img src="egg.svg"></img>
        <img src="egg.svg"></img>
        <img src="egg.svg"></img>
      </Box>
    </Box>
  );
};

export default Menu;
