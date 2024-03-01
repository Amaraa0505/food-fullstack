"use client";
import React, { useContext } from "react";
import { useState, useEffect } from "react";

import { BasketContext } from "../../contex/BasketProvider";
import {
  Typography,
  Button,
  Modal,
  Fade,
  Box,
  Backdrop,
  Stack,
  Grid,
} from "@mui/material";
import axios from "axios";
import { BorderAllRounded } from "@mui/icons-material";

export const Form = ({
  id,
  open,
  handleClose,
  name,
  price,
  image,
  description,
  closeForm,
}: {
  id: string;
  open: boolean;
  handleClose: () => void;
  name: string;
  price: string;
  image: string;
  description: string;
  closeForm: any;
}) => {
  
  const {  updateFoodToBasket, basket }: any = useContext(BasketContext);
  const [quantity, setQuantity] = useState(1);

  const handleCount = (operation: string) => {
    if (operation === "add") {
      if (quantity < 10) setQuantity(quantity + 1);
    } else {
      if (quantity) setQuantity(quantity - 1);
    }
  };



const handleSave =()=>{
  updateFoodToBasket({
    name,
      price,
      image,
      description,
      quantity,
    
  })
}


  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        height: 500,
        width: 600,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{backgroundColor:"white", borderRadius:12}}>
        <Stack sx={{ display: "flex", flexDirection: "row" }}>
          <img src={image} alt="name" width={250} height={250}  />
          <Stack spacing={4}  width={"300px"}>
            <Grid>
              <Typography>{name}</Typography>
              <Typography
                id="modal-modal-title"
                color="#18BA51"
                variant="h5"
                component="h2"
              >
                {price}₮
              </Typography>
            </Grid>

            <Grid>
              <Typography id="modal-modal-description" variant="h5">
                Орц
              </Typography>
              <Typography
                variant="body2"
                sx={{ padding: 3, borderRadius: "3px" }}
              >
                {description}
              </Typography>
            </Grid>
          </Stack>
          <Grid display={"flex"} flexDirection={"column"} gap={6}>
            <Typography variant="h6">Тоо</Typography>
            <Box sx={{ display: "flex" }}>
              <Button sx={{ backgroundColor: "purple", width: 30 }}>-</Button>
              <Typography>1</Typography>
              <Button sx={{ backgroundColor: "purple", width: 30 }}>+</Button>
            </Box>
            <Button
              variant="contained"
              color="success"
              onClick={handleSave}
              sx={{
                color: "white",
              }}
            >
              Сагслах
            </Button>
          </Grid>
        </Stack>
      </Box>
    </Modal>
  );
};
