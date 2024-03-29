// CardDrawer.js
import React, { useContext } from "react";
import {
  Box,
  Drawer,
  Typography,
  Grid,
  Button,
  Stack,
  Link,
} from "@mui/material";
import { useState, useEffect } from "react";
import { FoodContext } from "@/contex/FoodProvider";
import { BasketContext } from "@/contex/BasketProvider";
import { BasketCardOne } from "../BasketCardOne";
import axios from "axios";
import { UserContext } from "@/contex/UserProvider";
import order from "@/app/(auth)/order/page";

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
  const { basket, getFoodBasket }: any = useContext(BasketContext);
  const { user, setUser }: any = useContext(UserContext);
  console.log("basketb", basket);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const total = basket?.foods?.map((food:any)=>food?.price * food.count).reduce((a:any, b:any)=>a + b, 0)
  const total = basket?.foods?.food?.price * basket?.foods?.food?.count;
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
      <Box sx={{}}>
        <Typography sx={{ fontWeight: 20, fontSize: 20, ml: 10, mt: 10 }}>
          Сагсны мэдээлэл
        </Typography>
        <Grid>
          {basket?.foods?.map((e: any) => (
            <Box sx={{ marginBottom: 60 }}>
              <BasketCardOne
                name={e?.food?.name}
                description={e?.food?.description}
                price={e?.food?.price}
                image={e?.food.image}
                basketCount={e?.food?.count}
                id={e?.food?._id}
                totalPrice={e?.basket?.totalPrice}
              />
            </Box>
          ))}
        </Grid>
        <Box>
          <Typography sx={{ fontSize: 20, fontWeight: 800, ml: 10 }}>
            Миний захиалага
          </Typography>
          {/* <Grid>
            {user.orders.map((order: any) => (
              <Grid>{order?.name}</Grid>
            ))}
          </Grid> */}
        </Box>
        <Box sx={{ display: "flex", gap: 15, alignItems: "center", ml: 10 }}>
          <Typography sx={{ fontWeight: 400, fontSize: 18 }}>
            Нийт дүн:
          </Typography>
          <Stack sx={{ fontWeight: 800, fontSize: 20 }}>{total}</Stack>

          <Link
            sx={{
              backgroundColor: "#18BA51",
              width: 100,
              color: "white",
              mb: 2,
              fontWeight: 550,
            }}
            // onClick={()=>{
            //   const {data: orders} = await  axios.post(;asf;sfaf);
            //   setUser({...user, orders});
            // }}
            href={"/order"}
          >
            {" "}
            Захиалах
          </Link>
        </Box>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
