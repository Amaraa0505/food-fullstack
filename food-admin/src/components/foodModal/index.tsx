"use client";
import React, { useContext } from "react";
import {
  Box,
  Button as MuiButton,
  Typography,
  Modal,
  Grid,
  Stack,
  styled,
  FormControlLabel,
  FormGroup,
  Checkbox,
  SelectChangeEvent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import Image from "next/image";
import { Remove, Add, Close } from "@mui/icons-material";
import { Button, Input } from "../core";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import MySelect from "../core/myselect";
import axios from "axios";
import { CategoryContext } from "@/context/CategoryProvider";
import { FoodContext } from "@/context/FoodProvider";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 5,
  boxShadow: 22,
  p: 4,
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function FoodModal({
  handleClose,
  open,
  handleChangeFood,
  handleSave,
  handleFileChange,
  setSelectedValue,
  selectedValue,
}: any) {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const { categories } = React.useContext(CategoryContext);
  const { foods } = useContext(FoodContext);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography variant="h3">Хоол нэмэх хэсэг</Typography>
            <MuiButton onClick={handleClose} sx={{ fontSize: 23 }}>
              X
            </MuiButton>
          </Stack>

          <Input
            label="Name"
            desc="Хоолны нэрийг оруулна уу"
            name="name"
            onChange={handleChangeFood}
          />

          <Input
            label="Price"
            desc="Үнийн дүнг оруулна уу"
            name="price"
            onChange={handleChangeFood}
          />
          <Input
            label="Description"
            desc="Write food Description"
            name="description"
            onChange={handleChangeFood}
          />
          <Stack>
            <Input
              label="Discount"
              desc="Хямдралын хувийг оруулна уу"
              name="discount"
              onChange={handleChangeFood}
            />
            <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="sale"
              />
            </FormGroup>
          </Stack>
          <Stack>
            <FormControl sx={{ m: 1, minWidth: 120 }} required>
              <FormControl fullWidth>
                <InputLabel>category</InputLabel>
                <Select
                  value={selectedValue}
                  name="category"
                  onChange={handleChangeFood}
                >
                  {categories.map((option: any) => (
                    <MenuItem key={option._id} value={option._id}>
                      {option?.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormHelperText>Required</FormHelperText>
            </FormControl>
          </Stack>
          <MuiButton
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput type="file" onChange={handleFileChange} />
          </MuiButton>
          <Button label="нэмэх" onClick={handleSave}></Button>
        </Box>
      </Modal>
    </div>
  );
}
