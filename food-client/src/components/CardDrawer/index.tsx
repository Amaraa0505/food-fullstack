// CardDrawer.js
import React, { useContext } from "react";
import { Box, Drawer, Typography, Grid, Button, Stack } from "@mui/material";
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

const CartDrawer: React.FC<Props> = ({
  isCartOpen,
  handleCartClose,
  
}: any) => {
  const { foods,  } = useContext(FoodContext);
  const [quantity, setQuantity]=useState(1)

  const handleIncreaseQuantity = () => {
    
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {

    if (quantity > 1) {
     
      setQuantity(quantity - 1);
    }
  };


  return (
    <Drawer
      anchor="right"
      open={isCartOpen}
      onClose={handleCartClose}
      sx={{ display: "flex", flexDirection: "row", padding: 10, ml: 20 }}
    >
      <Box>
        <Grid container spacing={3} sx={{ fontSize: 20 }}>
          {/* {food.name} */}
        </Grid>
        <img style={{ height: 250, borderRadius: 50 }}
        //  src=
        // {food.image}
        ></img>
        <Grid sx={{ fontSize: 20 }}>Price: 
        {/* {food.price} */}
        </Grid>
      </Box>
      <Box sx={{ display: "flex", gap: 3 }}>
        <Button
          sx={{
            borderRadius: 4,
            bgcolor: "#18BA51",
            color: "white",
            fontWeight: 550,
          }}
          onClick={handleDecreaseQuantity}
        >
          -
        </Button>

        <Typography sx={{ font: "revert-layer" }}>{quantity}</Typography>

        <Button
          sx={{
            bgcolor: "#18BA51",
            borderRadius: 4,
            color: "white",
            fontWeight: 550,
          }}
          onClick={handleIncreaseQuantity}
        >
          +
        </Button>

        <Button
          sx={{
            backgroundColor: "#18BA51",
            width: 100,
            color: "white",
            mb: 2,
            fontWeight: 550,
          }}
        >
          {" "}
          Захиалах
        </Button>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
