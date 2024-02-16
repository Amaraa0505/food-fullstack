"use client";
import React from "react";
import LoginForm from "../LoginForm";
import customer from "@/app/(auth)/customer/page";

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
import { useState } from "react";
// import SearchIcon from "@mui/icons-material/Search";

const arr = [
  {
    link: "/",
    label: "qwert",
  },
];

type Anchor = "right";

export const Header = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "right" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
    </Box>
  );

  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    console.log("aaaa");
    setOpen(() => true);
    console.log("open", open);
  };
  const handleClose = () => {
    setOpen(() => false);
  };

  const closeForm = () => {
    setOpen(() => false);
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
        <Grid display={"flex"} gap={3}>
          <Stack>
            {(["right"] as const).map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  <img src="sags.svg"></img>
                  <Link
                    className="items"
                    color={"#212121"}
                    style={{ textDecoration: "none" }}
                  >
                    Сагс
                  </Link>
                </Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      top: 5,
                      fontSize: 28,
                      fontWeight: 600,
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    Таны сагс
                  </Typography>
                  <hr className="horizon"></hr>
                  <Stack
                    display={"flex"}
                    flexDirection={"row"}
                    sx={{ padding: 2 }}
                  >
                    <img src="pizza.svg"></img>
                    <Grid sx={{ padding: 4 }}>
                      <Typography fontSize={20}>Main Pizza</Typography>
                      <Typography color={"green"} fontSize={18}>
                        34,800
                      </Typography>
                      <Typography width={200}>
                        Хулуу, төмс, лууван, сонгино, цөцгийн тос, самрын үр
                      </Typography>

                      {list(anchor)}
                      <Stack
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-around",
                          padding: 3,
                          alignItems: "center",
                        }}
                      >
                        <Button
                          sx={{
                            bgcolor: "success.main",
                            height: 40,
                            width: 20,
                            color: "white",
                          }}
                        >
                          -
                        </Button>
                        <Typography>1</Typography>
                        <Button
                          sx={{
                            borderRadius: 1,
                            bgcolor: "success.main",
                            height: 40,
                            width: 20,
                            color: "white",
                          }}
                        >
                          +
                        </Button>
                      </Stack>
                    </Grid>
                  </Stack>
                  <hr className="horizon"></hr>
                  <Stack
                    direction="row"
                    alignItems="flex-end"
                    sx={{
                      justifyContent: "space-around",
                      display: "flex",
                      my: 5,
                    }}
                    height="100%"
                  >
                    <Box>
                      <Typography>Нийт төлөх дүн</Typography>
                      <Typography sx={{ fontWeight: 600, fontSize: 20 }}>
                        34,800
                      </Typography>
                    </Box>
                    <Button
                      sx={{
                        width: 200,
                        backgroundColor: "green",
                        color: "white",
                        height: 50,
                      }}
                    >
                      Захиалах
                    </Button>
                  </Stack>
                </Drawer>
              </React.Fragment>
            ))}
          </Stack>
        </Grid>
        <Grid display={"flex"} gap={3}>
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
    </Grid>
  );
};
