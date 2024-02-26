// CardDrawer.js
import React, { useContext } from "react";
import { Box, Drawer, Typography, Grid } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import FoodCard from "../FoodCard";
import { FoodContext } from "@/contex/FoodProvider";

interface CartItem {
  id: number;
  name: string;
  price: number;
}

interface Props {
  isCartOpen: boolean;
  handleCartClose: () => void;
}

const CartDrawer: React.FC<Props> = ({ isCartOpen, handleCartClose }: any) => {
  // const { foods, selectedFood } = useContext(FoodContext);

  return (
    <Drawer anchor="right" open={isCartOpen} onClose={handleCartClose}>
      <Box
        sx={{ padding: 7, display: "flex", flexDirection: "column", gap: 6 }}
      >
        Backet
        <Grid container spacing={3}></Grid>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
