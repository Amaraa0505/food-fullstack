"use client";
import React from "react";
import { Typography, Modal, Fade, Box, Backdrop, Button } from "@mui/material";

interface ISaveForm {
  open: boolean;
  setOpen: () => void;
  handleClose: () => void;
}

const Save = ({ open, setOpen, handleClose }: ISaveForm) => {
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
              borderRadius: 3,
              boxShadow: 24,
              pt: 2,
              px: 4,
              pb: 3,
              width: 300,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            display={"flex"}
            padding={5}
          >
            <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
              Та системээс гарахдаа итгэлтэй байна уу?
            </Typography>

            <Box
              sx={{
                display: "flex",
                mt: 6,
                gap: 3,
              }}
            >
              <Button
                sx={{
                  color: "black",
                  backgroundColor: "green",
                  width: 124,
                  height: 50,
                  borderRadius: 4,
                }}
              >
                Тийм
              </Button>
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "green",
                  width: 124,
                  borderRadius: 4,
                  height: 50,
                }}
              >
                Үгүй
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Save;
