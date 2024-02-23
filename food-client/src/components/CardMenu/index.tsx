"use client";
import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import FoodCard from "../FoodCard";

const CardMenu = () => {

const [foods, setFoods]=useState([])

const getFood = async ()=>{
  try {
    const {
      data: {foods},
    }=(await axios.get("http://localhost:8080/food")) as {
      data: {foods: []};
    };
    setFoods(foods);
    console.log(foods)
  } catch (error) {
    console.log("ERR", error)
  }
}

useEffect(() => {
  getFood();
}, []);


  return (
    <Box sx={{ padding: 7, display: "flex", flexDirection: "column", gap: 6 }}>
       <Grid container spacing={3}>
        {foods.map((food: any) => (
          <Grid xs={12} sm={6} md={3}>
            <FoodCard key={food._id} food={food} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardMenu;
