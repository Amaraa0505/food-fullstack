"use client";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Form } from "../Form";
import {BasketContext} from "../../contex/BasketProvider"

import { Grid } from "@mui/material";

import { fCurrency } from "../../utils/format-number";
import { useState, useContext } from "react";

// import Label from "@/components/label";

// ----------------------------------------------------------------------

export default function BasketCard({ food, category }: any) {
  const { name, image } = food;
  const [open, setOpen] = useState(false);
const {getFoodBasket, deleteFoodFromBasket, updateFoodToBasket, addFoodToBasket}:any=useContext(BasketContext)
  const handleOpen = () => setOpen(true);

  const closeForm = () => {
    console.log("CLO");


    setOpen((prev) => {
      console.log("STA", prev);
      return false;
    });
  };

  const renderImg = (
    <Box
      component="img"
      alt={name}
      src={image}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: "cover",
        position: "absolute",
      }}
    />
  );

  const renderPrice = (
    <Typography variant="subtitle1">
      <Typography
        component="span"
        variant="body1"
        sx={{
          color: "text.disabled",
          textDecoration: "line-through",
        }}
      >
        {food.priceSale && fCurrency(food.priceSale)}
      </Typography>
      &nbsp;
      {fCurrency(food.price)}
    </Typography>
  );

  return (
    <Card
      sx={{
        ":hover": {
          cursor: "pointer",
          ml: 3,
          // display: "flex",
          // gap: 200,
          // flexDirection: "column",
        },
      }}
      onClick={handleOpen}
    >
      <Box sx={{ pt: "100%", position: "relative", width: 300 }}>
        {/* {product.status && renderStatus} */}

        {renderImg}
      </Box>

      <Stack sx={{}}>
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          {name}
        </Link>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {renderPrice}
        </Stack>
      </Stack>

      <Form
        open={open}
        handleOpen={handleOpen}
        closeForm={closeForm}
        food={food}
      />
    </Card>
  );
}