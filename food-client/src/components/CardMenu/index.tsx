"use client";
import React, { useContext } from "react";
import { Box, Grid, Stack, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { FoodCard } from "../FoodCard";
import { FoodContext } from "@/contex/FoodProvider";
import { CategoryContext } from "@/contex/CatgeoryProvider";
import { BasketContext } from "@/contex/BasketProvider";

const CardMenu = () => {
  const [baskets, setBaskets] = useState([]);
  const [category, setCategory] = useState([]);
  const {} = useContext(BasketContext);
  const { getFood, foods } = useContext(FoodContext);
  const { categories, chosenCategory, HandleClickCategory } =
    useContext(CategoryContext);

  return (
    <Box sx={{ padding: 7, display: "flex", flexDirection: "column", gap: 6 }}>
      <Grid container spacing={3}>
        {categories.map((e) => (
          <Grid item gridRow={6}>
            <Button
              variant="contained"
              // color={e._id === chosenCategory ? "blue" : "blue"}
              sx={{ borderRadius: 6, width: 185 }}
              onClick={() => HandleClickCategory(e._id)}
            >
              {e.name}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3}>
        {foods
          ?.filter((food: any) => food.category._id === chosenCategory)
          .map((food: any) => (
            <FoodCard {...food} />
          ))}
      </Grid>
    </Box>
  );
};

export default CardMenu;
