"use client";

import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import FoodModal from "@/components/foodModal";
import { ChangeEvent } from "react";
import { FoodContext } from "@/context/FoodProvider";

import FoodCard from "./food-card";
import FoodSort from "./food-sort";
// import ProductFilters from "./product-filters";
// import ProductCartWidget from "./product-cart-widget";

// ----------------------------------------------------------------------
import { sample } from "lodash";
import { faker } from "@faker-js/faker";
import { Button } from "@mui/material";
import Iconify from "@/components/iconify";

// ----------------------------------------------------------------------


export default function FoodView() {
  const [openFilter, setOpenFilter] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(() => true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(() => false);
  };

  const handleOpen = () => {
    setOpen(() => true);
  };
  const handleClose = () => {
    setOpen(() => false);
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.currentTarget.files![0]);
    console.log("------", handleFileChange);
  };

  const [newFood, setNewFood] = useState({
    name: "",
    description: "",
    price: "",
    discount: "",
    category: "",
  });

  const handleChangeFood = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewFood({ ...newFood, [name]: value });
    console.log("DATA++", newFood);
  };

  const [file, setFile] = useState<File | null>(null);
  const [selectedValue, setSelectedValue] = useState("");

  const createFood = async () => {
    try {
      const formData = new FormData();
      formData.set("image", file!);
      formData.set("name", newFood.name);
      formData.set("description", newFood.description);
      formData.set("price", newFood.price);
      formData.set("discountPrice", newFood.discount);
      formData.set("category", newFood.category);
      console.log("neww", newFood);

      const token = localStorage.getItem("token");

      await axios.post("http://localhost:8080/food", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("newFood:", newFood);

      console.log("Success Add Food");
    } catch (error: any) {
      alert("Add Error - " + error.message);
    }
  };

  const { foods } = useContext(FoodContext);

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4" sx={{ mb: 5 }}>
          Хоолны жагсаалт
        </Typography>
        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={handleOpen}
        >
          Шинэ хоол
        </Button>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 2 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          {/* <ProductFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          /> */}

          <FoodSort />
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {foods.map((food: any) => (
          <Grid xs={12} sm={6} md={3}>
            <FoodCard key={food._id} food={food} />
          </Grid>
        ))}
      </Grid>

      {/* <ProductCartWidget /> */}
      <FoodModal
        open={open}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        handleFileChange={handleFileChange}
        handleClose={handleClose}
        openFilter={openFilter}
        handleChangeFood={handleChangeFood}
        handleSave={createFood}
      />
    </Container>
  );
}
