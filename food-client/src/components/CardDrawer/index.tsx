// CardDrawer.js
import React, { useContext } from "react";
import { Box, Drawer, Typography, Grid, Button, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { FoodContext } from "@/contex/FoodProvider";
import { BasketContext } from "@/contex/BasketProvider";
import { BasketCardOne } from "../BasketCardOne";
import axios from "axios";
import { UserContext } from "@/contex/UserProvider";

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
// const [order, setOrder]=useState([])

// const createOrder=async()=>{
//   try {
//     const orderData=new FormData()
//     orderData.set("food",food)
//     orderData.set("qty", quantity)
//     orderData.set("totalPrice.set", totalPrice)
//     orderData.set("khoroo", khoroo)
//     orderData.set("duureg", duureg)
//     orderData.set("buildingNo", buildingNo)

//     const token = localStorage.getItem("token");

//       await axios.post("http://localhost:8080/order", orderData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//   } catch (error:any) {
//     alert("Add Error - " + error.message);
//   }
// }





  const { basket, getFoodBasket}: any = useContext(BasketContext);
  const { user, setUser}: any = useContext(UserContext);
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
      <Box sx={{}}>
       <Typography sx={{fontWeight:800,fontSize:20,ml:10, mt:10}}>Сагсны мэдээлэл</Typography>
      <Grid >
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
        <Typography sx={{fodnSize:500, fontWeight:800, ml:10}}>Миний захиалага</Typography>
        <Grid>{user.orders.map((order:any)=>(
          <Grid>{order?.name}</Grid>
        ))}</Grid>
      </Box>
      <Box sx={{ display: "flex", gap: 15, alignItems:"center", ml:10 }}>
        <Typography sx={{fontWeight:400, fontSize: 18}}>Нийт дүн:</Typography>
        <Stack sx={{fontWeight:800, fontSize:20}}>{basket?.totalPrice}</Stack>
        
        <Button
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
