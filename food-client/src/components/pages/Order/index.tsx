"use client";
import React, { useContext, useState } from "react";
import {
  Button,
  Box,
  Grid,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Input,
} from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import { BasketContext } from "@/contex/BasketProvider";
import { BasketCardOne } from "@/components/BasketCardOne";
import { OrderFood } from "./OrderFood";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "@/contex/UserProvider";

const Order = () => {
  const { basket }: any = useContext(BasketContext);
  const { token } = useContext(UserContext);
  //   const token =
  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDQ3ZmVjZGE2MGQxYjM0YmViMmExZiIsImlhdCI6MTcwOTcxNjc4MiwiZXhwIjoxNzA5ODAzMTgyfQ.VvHcb9lppIgchSXZtlBwV5H9m46QPau1h1xYIaWHKOQ";

  const [address, setAddress] = useState({
    khoroo: "",
    duureg: "",
    buildingNo: "",
  });
  const createOrder = async () => {
    try {
      const orderFood = await axios.post(
        `http://localhost:8080/order`,
        address,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("OF", orderFood);
      setAddress({ ...address });
      toast("Захиалага амжилттай хийлээ");
    } catch (error) {
      console.log("ERR", error);
    }
  };
  return (
    <Box sx={{ my: 15, display: "flex", justifyContent: "space-around", padding:5 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Typography>Xаягын мэдээлэл оруулах</Typography>
        <FormControl sx={{ width: 400 }}>
          <InputLabel id="demo-simple-select-label">Duureg</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            <MenuItem>Bayngol</MenuItem>
            <MenuItem>Chingeltei</MenuItem>
            <MenuItem>Khan-uul</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: 400 }}>
          <InputLabel id="demo-simple-select-label">Khoroo</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            <MenuItem>34</MenuItem>
            <MenuItem>45</MenuItem>
            <MenuItem>23</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: 400 }}>
          <InputLabel id="demo-simple-select-label">BuildingNo</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            <MenuItem>23</MenuItem>
            <MenuItem>34</MenuItem>
            <MenuItem>35</MenuItem>
          </Select>
        </FormControl>
        <Typography>Нэмэлт мэдээлэл оруулах</Typography>
        <Input></Input>
        <Typography>Утасны дугаар оруулах</Typography>
        <Input></Input>
        <Box sx={{ display: "flex", gap: 4 }}>
          <CheckBox />
          <Typography>Бэлэнээр</Typography>
          <CheckBox />
          <Typography>Картаар</Typography>
        </Box>
      </Box>
      <Box>
        <Typography sx={{ fontSize: 20, fontWeight: 600, ml:10 }}>
          Захиалга баталгаажуулах
        </Typography>
       
        <Grid>
          {basket?.foods?.map((e: any) => (
            
            <Box sx={{ marginBottom: 60 }}>
              
              <OrderFood
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
       
        <Box sx={{display:"flex", gap:10, ml:10}}>
          <Typography sx={{fontWeight:800}}>Нийт дүн:</Typography>
          <Typography>{basket?.totalPrice}</Typography>
        </Box>
        <Button sx={{ color: "black", fontWeight:800, ml:8 }} onClick={createOrder}>
          Захиалах
        </Button>
      </Box>
    </Box>
  );
};

export default Order;
