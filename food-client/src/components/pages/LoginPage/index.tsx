"use client";
import React, { useState } from "react";
import { Button, Input } from "@/components";
import { Typography, Stack, Link, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { UserContext } from "../../../contex/UserProvider";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

const validationSchema = yup.object({
  email: yup
    .string()
    .max(100, "Имэйл хаяг 100 тэмдэгтээч хэтрэхгүй байна.")
    .required("Имэйл хаягыг заавал бөглөнө үү.")
    .email("Хүчинтэй имэйл хаяг байх ёстой")
    .matches(
      /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@gmail[A-Za-z0-9.-]+$/,
      "Та зөвхөн gmail хаяг оруулна"
    ),
  password: yup
    .string()
    .required("Нууц үгээ заавал бөглөнө үү.")
    .min(6, "Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой."),
});

const LoginPage = () => {
  const { login, user } = useContext(UserContext);

  const formik = useFormik({
    onSubmit: async ({ email, password }) => {
      console.log("EMAIL", email);
      console.log("PASS", password);
      // login(email, password);
      try {
        const { data } = await axios.post("http://localhost:8080/auth/login", {
          userEmail: email,
          userPassword: password,
        });
        console.log("nevterlee",data);
      } catch (error) {
        console.log(error);
      }
    },
    initialValues: { email: "", password: "" },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });

  const router = useRouter();
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        my: 22,
      }}
    >
      <Typography sx={{ fontSize: "28px", fontWeight: "700" }}>
        Нэвтрэх
      </Typography>

      <Stack sx={{ display: "flex" }}>
        <Input
          label="Имэйл"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          errorText={formik.errors.email}
        />
        <Input
          label="Нууц үг"
          showPassword
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          errorText={formik.errors.password}
        />

        <IconButton
          // onClick={() => {
          //   router.push("./forget-pass");
          // }}
          color="inherit"
          sx={{ width: 150, marginLeft: 60 }}
        >
          {" "}
          <Button label="Нууц үг сэргээх" btnType="text" href="/forgot-pass" />
        </IconButton>
      </Stack>

      <Stack>
        <Button label="Нэвтрэх" onClick={formik.handleSubmit} />

        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            my: 4,
            fontSize: 17,
          }}
        >
          Эсвэл
        </Typography>
        <Link href={"./signup"}>
          <Button label="Бүртгүүлэх" />
        </Link>
      </Stack>
    </Stack>
  );
};

export default LoginPage;
