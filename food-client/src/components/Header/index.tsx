"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import LoginForm from "../LoginForm";
import customer from "@/app/(auth)/customer/page";
import CartDrawer from "../../components/CardDrawer";
import order from "@/app/(auth)/order/order";

import {
  Grid,
  Button,
  Stack,
  Link,
  Drawer,
  Box,
  Divider,
  Typography,
  Tooltip,
  IconButton,
  Avatar,
} from "@mui/material";

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    console.log("aaaa");
    setOpen(() => true);
    console.log("open", open);
  };
  const handleClose = () => {
    setOpen(() => false);
  };


  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  return (
    <Grid display={"flex"} justifyContent={"space-around"}>
      <Stack
        direction="row"
        spacing={10}
        alignItems={"center"}
        style={{ textDecoration: "none" }}
      >
        <img src="pinecone.svg"></img>
        <Link href="./" style={{ textDecoration: "none" }} color={"#212121"}>
          Нүүр
        </Link>
        <Link
          color={"#212121"}
          style={{ textDecoration: "none" }}
          href={"/menu"}
        >
          Хоолны цэс
        </Link>
        <Link color={"#212121"} style={{ textDecoration: "none" }}>
          Хүргэлтийн бус
        </Link>
      </Stack>
      <Stack direction={"row"} alignItems={"center"}>
        <Grid display={"flex"} gap={3}></Grid>
        <Grid display={"flex"} gap={3}>
          {/* <Link 
          style={{color:"black", cursor:"pointer", textDecoration:"none"}} 
          href={"/order"}>
            Миний Захиалга
          </Link> */}
          <Link
            style={{
              cursor: "pointer",
              color: "black",
              textDecoration: "none",
            }}
            onClick={handleCartOpen}
          >
            Сагс
          </Link>
          <img src="enroll.svg"></img>
          <Link
            color={"#212121"}
            onClick={handleOpen}
            style={{ textDecoration: "none" }}
          >
            Нэвтрэх
          </Link>
          {open && (
            <LoginForm
              open={open}
              handleOpen={handleOpen}
              handleClose={handleClose}
            />
          )}
          <Link
            color={"#212121"}
            href={"/customer"}
            style={{ textDecoration: "none" }}
          >
            Хэрэглэгч
          </Link>
        </Grid>
      </Stack>
      <CartDrawer
          isCartOpen={isCartOpen}
          handleCartClose={handleCartClose}
         
        />
    </Grid>
  );
};
