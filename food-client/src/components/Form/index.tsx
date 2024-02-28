"use client";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import CartDrawer from "../CardDrawer";
import { BacketContext } from "../../contex/BacketProvider";
import {
  Typography,
  Button,
  Modal,
  Fade,
  Box,
  Backdrop,
  Stack,
} from "@mui/material";
import axios from "axios";

export const Form = ({ open, closeForm, food }: any) => {
  const { backets } = useContext(BacketContext);
  const [foods, setFoods] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  console.log("OO", open);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={closeForm}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          pt: 2,
          px: 4,
          pb: 3,
          borderRadius: 3,
          height: 350,
        }}
        display={"flex"}
      >
        <Button
          onClick={() => {
            console.log("CLOSE", closeForm);
            closeForm();
          }}
        >
          Close
        </Button>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: 3,
          }}
        >
          <img style={{ height: 250 }} src={food.image}></img>
        </Stack>
        <Stack sx={{ padding: 2 }}>
          <Stack>
            <Typography fontSize={20} fontWeight={600}>
              {food.name}
            </Typography>
            <Typography color={"#18BA51"} fontSize={18} fontWeight={550}>
              {food.price}
            </Typography>
            <Typography sx={{ mt: 1, fontSize: 18, fontWeight: 540 }}>
              Орц
            </Typography>
            <Typography
              width={100}
              sx={{
                backgroundColor: "#f5f5f5",
                borderRadius: 3,
                width: 300,
                my: 2,
                padding: 2,
              }}
            >
              {food.description}
            </Typography>
            <Typography sx={{ fontWeight: 540, fontSize: 18 }}>Тоо</Typography>
          </Stack>

          <Stack
            display={"flex"}
            flexDirection={"row"}
            alignItems={"end"}
            height={"full"}
            justifyContent={"space-between"}
            padding={4}
          >
            <Button
              sx={{
                borderRadius: 4,
                bgcolor: "#18BA51",
                color: "white",
                fontWeight: 550,
              }}
            >
              -
            </Button>

            <Typography sx={{ font: "revert-layer" }}>1</Typography>

            <Button
              sx={{
                bgcolor: "#18BA51",
                borderRadius: 4,
                color: "white",
                fontWeight: 550,
              }}
            >
              +
            </Button>
          </Stack>
          <Button
            sx={{
              backgroundColor: "#18BA51",
              width: 300,
              color: "white",
              mb: 2,
              fontWeight: 550,
            }}
            onClick={handleCartOpen}
          >
            {" "}
            Сагслах
          </Button>
        </Stack>
        <CartDrawer
          isCartOpen={isCartOpen}
          handleCartClose={handleCartClose}
          food={food}
        />
      </Box>
    </Modal>
  );
};
