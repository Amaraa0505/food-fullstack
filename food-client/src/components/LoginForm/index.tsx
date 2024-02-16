"use client";
import React from "react";
import {
  Typography,
  Modal,
  Fade,
  Box,
  Backdrop,
  Stack,
  IconButton,
} from "@mui/material";
import { Button, Input } from "@/components";
import { useRouter } from "next/navigation";

interface ILogForm {
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
}

const LoginForm = ({ open, handleOpen, handleClose }: ILogForm) => {
  const router = useRouter();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              borderRadius: 2,
              boxShadow: 24,
              pt: 2,
              px: 4,
              pb: 3,
              display: "flex",
              flexDirection: "column",
              my: 3,
            }}
            display={"flex"}
            padding={5}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                fontSize: 28,
                fontWeight: 600,
              }}
            >
              Нэвтрэх
            </Typography>
            <Stack sx={{ display: "flex", justifyContent: "center", gap: 5 }}>
              <Input name="email" label="Имэйл" />
              <Input name="password" label="Нууц үг" showPassword />
              <IconButton
                onClick={() => {
                  router.push("./pass");
                }}
                color="inherit"
                sx={{ width: 150, marginLeft: 60, marginBottom: 3 }}
              >
                <span style={{ fontSize: 15 }} onClick={handleClose}>
                  Нууц үг сэргээх
                </span>
              </IconButton>
            </Stack>
            <Stack>
              <Button label="Нэвтрэх" />
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 13,
                  marginBottom: 13,
                }}
              >
                Эсвэл
              </span>
              <Button label="Бүртүүлэх" />
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default LoginForm;
