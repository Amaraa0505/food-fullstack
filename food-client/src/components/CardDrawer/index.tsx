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
  const { basket, getFoodBasket}: any = useContext(BasketContext);
  console.log("basketb", basket);
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
      sx={{
        display: "flex",
        flexDirection: "row",
        // padding: 20,
        // ml: 20,
        // width: 500,
      }}
    >
      <Box sx={{padding:5}}>
       <Typography sx={{fontWeight:18,fontSize:18, }}>Сагсны мэдээлэл</Typography>
      <Grid >
        {basket?.foods?.map((e: any) => (
          <Box sx={{ marginBottom: 60 }}>
            <BasketCardOne
              name={e?.food?.name}
              description={e?.food?.descriptsion}
              price={e?.food?.price}
              image={e?.food.image}
              basketCount={e?.food?.count}
              id={e?.food?._id}
              totalPrice={e?.basket?.totalPrice}
            />
          </Box>
        ))}
      </Grid>
      <Box sx={{ display: "flex", gap: 3 }}>
        <Box>
        <Typography>Нийт дүн:</Typography>
        <Stack></Stack>
        </Box>
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
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
