"use client";
import React from "react";
import { Box, Grid, ImageListItem, Typography } from "@mui/material";
import { Input, Button } from "@/components";
import Save from "@/components/Save";

const UserPage = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid sx={{ display: "flex", justifyContent: "center", my: 15 }}>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <ImageListItem
          sx={{
            width: 120,
            height: 120,
            display: "flex",
            justifyContent: "column",
            alignItems: "center",
            borderRadius: 4,
          }}
        >
          <img src="me.jpg" style={{ borderRadius: 100, border: "white" }} />
        </ImageListItem>
        <Typography sx={{ fontSize: 28, fontWeight: 550 }}>
          Амарсанаа
        </Typography>
        <Input name="" label="Таны нэр" />
        <Input name="" label="Утасны дугаар" />
        <Input name="" label="Имэйл хаяг" />
        <Button label="Хадгалах" onClick={handleOpen} />
        {open && (
          <Save open={open} setOpen={handleOpen} handleClose={handleClose} />
        )}
        <Typography>Захиалгын түүх</Typography>
        <Typography>Гарах </Typography>
      </Grid>
    </Grid>
  );
};

export default UserPage;
