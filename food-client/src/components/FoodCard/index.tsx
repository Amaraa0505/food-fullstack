"use client";
import React, { PropsWithChildren } from "react";
import { Form } from "../Form";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Chip,
  Box,
  Grid,
} from "@mui/material";
import { green } from "@mui/material/colors";

import { IFood } from "../../contex/FoodProvider";

export const FoodCard = ({
  name,
  price,
  image,
  isSale,
  discountPrice,
  description,
  _id,
}: IFood) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        sx={{ width: 260, margin: 3, borderRadius: 5 }}
        onClick={handleOpen}
      >
        <CardMedia
          sx={{ height: 200, position: "relative" }}
          image={image}
          title="green iguana"
        >
          {isSale === true && (
            <Chip
              label={discountPrice}
              size="medium"
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                background: " #18BA51",
                padding: "4px 16px ",
              }}
            />
          )}
        </CardMedia>
        <CardContent sx={{ boxSizing: "border-box" }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontWeight: 900, font: 32, fontFamily: "unset" }}
          >
            {name}
          </Typography>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color={green[500]}
              sx={{ fontWeight: 900, font: 32, fontFamily: "unset" }}
            >
              {price}₮
            </Typography>
            {isSale == true && (
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 600,
                  font: 32,
                  fontFamily: "unset",
                  textDecoration: "line-through",
                }}
              >
                4,800₮
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>
      <Form
        open={open}
        handleClose={handleClose}
        name={name}
        price={price}
        image={image}
        description={description}
        id={_id}
      />
    </>
  );
};
