"use client";

import React, { ChangeEvent, useState } from "react";
import {
  TextField,
  Stack,
  FormControl,
  FormLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface IInputProps {
  name: string;
  label: string;
  value?: string;
  errorText?: string | undefined;
  showPassword?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  name,
  label,
  value,
  errorText = "",
  showPassword = false,
  onChange,
}: IInputProps) => {
  const [isShowPassword, setIsShowPassword] = useState(showPassword);

  return (
    <>
      <FormControl sx={{ my: 3 }} variant="outlined" fullWidth>
        <FormLabel sx={{ color: "black" }}>{label}</FormLabel>
        <OutlinedInput
          name={name}
          value={value}
          onChange={onChange}
          sx={{ backgroundColor: "#ECEDF0" }}
          placeholder={label}
          type={isShowPassword ? "password" : "text"}
          endAdornment={
            ///
            showPassword && (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setIsShowPassword(!isShowPassword);
                  }}
                >
                  {isShowPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }
        />

        <FormHelperText error={errorText ? true : false}>
          {errorText}
        </FormHelperText>
      </FormControl>
    </>
  );
};

// formik form deer utga oruulsanuu validation hiih bolomj olgodog
