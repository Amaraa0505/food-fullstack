"use client";

import React, { useContext } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import FoodCard from "../FoodCard";
import CategoryCard from "../CategoryCard";
import { FoodContext } from "@/contex/FoodProvider";
import { CategoryContext } from "@/contex/CatgeoryProvider";

const CardMenu = () => {
  const [category, setCategory] = useState([]);

  const { getFood, foods } = useContext(FoodContext);
  const { categories } = useContext(CategoryContext);

  return (
    <Box sx={{ padding: 7, display: "flex", flexDirection: "column", gap: 6 }}>
      <Grid container spacing={3}>
        {categories?.map((category: any) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </Grid>
      <Grid container spacing={3}>
        {foods.map((food: any) => (
          <Grid
            xs={12}
            sm={6}
            md={3}
            sx={{ display: "flex", justifyContent: "center", gap: 3 }}
          >
            <FoodCard key={food._id} food={food} category={category} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardMenu;
