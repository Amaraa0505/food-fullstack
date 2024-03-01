"use client";
import React, { useContext } from "react";
import {
  Box,
  Button as MuiButton,
  Typography,
  Modal,
  Grid,
  Divider,
  Stack,
  CardMedia,
} from "@mui/material";
import Image from "next/image";
import { Remove, Add, Close } from "@mui/icons-material";
import { relative } from "path";
import { Button } from "..";

export const BasketCardSecond = ({ selectedFood }: any) => {
  console.log("selectedFood", selectedFood);
  const [count, setCount] = React.useState(selectedFood.quantity);
  const backgroundImageStyle = {
    backgroundImage: `${selectedFood.food.image}`,
  };
  const min = () => {
    if (count === 0) {
    } else {
      setCount(count - 1);
    }
  };

  const add = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Grid container justifyContent={"space-evenly"} direction={"row"} my={3}>
        <Grid item xs={5}>
          <CardMedia
            sx={{ height: 150 }}
            image={selectedFood.food.image}
            title="green iguana"
          />
        </Grid>
        <Grid
          item
          xs={6}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"self-start"}
        >
          <Grid display={"flex"} flexDirection={"column"}>
            <Typography ml={5} fontSize={20} fontWeight={800}>
              {selectedFood.food.name}
            </Typography>
            <Typography
              fontSize={25}
              ml={5}
              fontWeight={600}
              sx={{ color: "#18BA51" }}
            >
              {selectedFood.food.price}₮
            </Typography>

            <Typography
              color={"gray"}
              ml={5}
              maxHeight={40}
              fontSize={12}
              fontWeight={600}
            >
              {selectedFood.food.description}
            </Typography>

            <div>
              <MuiButton onClick={min}>
                <Remove
                  sx={{
                    bgcolor: "#18BA51",
                    color: "white",
                    width: "70%",
                    height: "30px",
                    borderRadius: 2,
                  }}
                />
              </MuiButton>
              <input
                type="text"
                value={count}
                style={{
                  width: "60px",
                  border: "none",
                  textAlign: "center",
                  paddingTop: 4,
                  paddingBottom: 4,
                  fontWeight: 600,
                  fontSize: 16,
                }}
              />
              <MuiButton onClick={add}>
                <Add
                  sx={{
                    bgcolor: "#18BA51",
                    color: "white",
                    width: "70%",
                    height: "30px",
                    borderRadius: 2,
                  }}
                />
              </MuiButton>
            </div>
          </Grid>
          <Grid item xs={1}>
            <MuiButton>
              <Close />
            </MuiButton>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
