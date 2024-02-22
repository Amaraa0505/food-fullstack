
import React, { useState } from "react";
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
 
interface MySelectProps {
  label: string;
  options: {
    name: string;
    _id: string;
  }[];
  selectedValue: string;
  setSelectedValue: () => void;
  handleChangeFood:()=>void
}
 
const MySelect: React.FC<MySelectProps> = ({
  label,
  options,
  selectedValue,
  setSelectedValue,
  handleChangeFood
}) => {

 
  return (
    
  );
};
 
export default MySelect;