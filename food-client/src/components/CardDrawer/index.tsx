// CardDrawer.js
import React, { useContext } from "react";
import { Box, Drawer, Typography, Grid, Button, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { FoodContext } from "@/contex/FoodProvider";
import { BasketContext } from "@/contex/BasketProvider";
import { BasketCardOne } from "../BasketCardOne";

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
  const { foods }: any = useContext(BasketContext);
  const [quantity, setQuantity] = useState(1);

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
      <Grid>
        {foods?.map((e: any) => (
          <Box sx={{ marginBottom: 60 }} key={i}>
            <BasketCardOne
              name={e?.foodId?.name}
              description={e?.foodId?.description}
              price={e?.foodId?.price}
              image={e?.foodId?.image}
              foodCount={e?.count}
              id={e?.foodId?._id}
            />
          </Box>
        ))}
      </Grid>
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
