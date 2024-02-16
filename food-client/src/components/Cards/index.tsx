"use client";
import HomeHeader from "../HomeHeader";
import React, { useState } from "react";
import { Grid, Card, CardMedia, Typography, Button } from "@mui/material";
import { Flare } from "@mui/icons-material";
import Form from "../Form";
import BigMenu from "../BigMenu";
import CardMenu from "../CardMenu";

const Cards = () => {
  const closeForm = () => {
    setOpen(false);
  };
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);

  return (
    <Grid>
      <HomeHeader />
      <BigMenu />
      <CardMenu />
      <Button
        onClick={handleOpen}
        sx={{
          color: "black",
          fontWeight: 580,
          fontSize: 18,
          display: "flex",
          alignItems: "center",
        }}
      >
        Add
      </Button>
      {open && <Form open={open} setOpen={handleOpen} closeForm={closeForm} />}
    </Grid>
  );
};

export default Cards;
