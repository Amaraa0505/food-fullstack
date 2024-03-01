"use client";
import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ButtonGroup, Grid, IconButton, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import { BasketContext } from "@/contex/BasketProvider";

const style = {
  position: "absolute" as "absolute",
  width: 538,
  height: 182,
  bgcolor: grey[200],
  p: 4,
  display: "flex",
  gap: "40px",
  margin: "32px",
  borderRadius: "20px",
};

export const BasketCardOne = ({
  id,
  name,
  price,
  description,
  foodCount,
  image,
}: {
  id: string;
  name: string;
  price: string;
  description: string;
  foodCount: string;
  image: string;
}) => {
  const { updateBasket }: any = useContext(BasketContext);

  return (
    <Grid sx={{ border: 1 }} container>
      <Box sx={style}>
        <img src={image} alt="pic" width={245} height={150} />
        <Stack>
          <Grid item>
            <Typography sx={{ fontWeight: 700 }} variant="h5">
              {name}
            </Typography>
            <Typography
              sx={{ fontWeight: 900, fontSize: 20 }}
              color="#18BA51"
              variant="subtitle1"
              fontWeight={900}
            >
              {price}₮
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="body2"
              sx={{ background: grey[100], padding: 1, borderRadius: "3px" }}
            >
              {description}
            </Typography>
          </Grid>
          <Grid item>
            <ButtonGroup
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                sx={{ background: "#18BA51" }}
                // onClick={() => (minusCount(), updateBasket(id))}
              >
                -
              </Button>
              <Typography marginX={5} fontSize={20}>
                {foodCount}
              </Typography>
              <Button
                sx={{ background: "#18BA51" }}
                // onClick={() => (addCount(), updateBasket(id))}
              >
                +
              </Button>
            </ButtonGroup>
          </Grid>
        </Stack>
        <Grid item>
          <IconButton
          //  onClick={() => deleteBasketItem(id)}
          >
            X
          </IconButton>
        </Grid>
      </Box>
    </Grid>
  );
};
