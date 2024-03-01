"use client";
import HomeHeader from "../HomeHeader";
import React, { useState } from "react";
import { Grid, Card, CardMedia, Typography, Button } from "@mui/material";
import { Flare } from "@mui/icons-material";

import BigMenu from "../BigMenu";
import CardMenu from "../CardMenu";

const Cards = () => {
  return (
    <Grid>
      <HomeHeader />
      <BigMenu />
      <CardMenu />
      //{" "}
    </Grid>
  );
};

export default Cards;
