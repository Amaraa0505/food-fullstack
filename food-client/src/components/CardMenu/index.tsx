"use client";
import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

const CardMenu = () => {
  return (
    <Box sx={{ padding: 7, display: "flex", flexDirection: "column", gap: 6 }}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Grid sx={{ display: "flex", gap: 2 }}>
          <img src="Star 1.svg" style={{ width: 20 }}></img>
          <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
            Хямдралтай
          </Typography>
        </Grid>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography color={"#18BA51"}>Бүгдийг харах </Typography>
          <img src="arrow.svg" style={{ height: 15 }}></img>
        </Box>
      </Stack>
      <Grid>
        <img src="egg.svg" style={{ width: 200 }}></img>
      </Grid>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Grid sx={{ display: "flex", gap: 2 }}>
          <img src="Star 1.svg" style={{ width: 20 }}></img>
          <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
            Үндсэн хоол
          </Typography>
        </Grid>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography color={"#18BA51"}>Бүгдийг харах </Typography>
          <img src="arrow.svg" style={{ height: 15 }}></img>
        </Box>
      </Stack>
      <Grid>
        <img src="egg.svg" style={{ width: 200 }}></img>
      </Grid>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Grid sx={{ display: "flex", gap: 2 }}>
          <img src="Star 1.svg" style={{ width: 20 }}></img>
          <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
            Салад ба зууш
          </Typography>
        </Grid>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography color={"#18BA51"}>Бүгдийг харах </Typography>
          <img src="arrow.svg" style={{ height: 15 }}></img>
        </Box>
      </Stack>
      <Grid>
        <img src="egg.svg" style={{ width: 200 }}></img>
      </Grid>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Grid sx={{ display: "flex", gap: 2 }}>
          <img src="Star 1.svg" style={{ width: 20 }}></img>
          <Typography sx={{ fontSize: 20, fontWeight: 600 }}>Амттан</Typography>
        </Grid>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Typography color={"#18BA51"}>Бүгдийг харах </Typography>
          <img src="arrow.svg" style={{ height: 15 }}></img>
        </Box>
      </Stack>
      <Grid>
        <img src="egg.svg" style={{ width: 200 }}></img>
      </Grid>
    </Box>
  );
};

export default CardMenu;
