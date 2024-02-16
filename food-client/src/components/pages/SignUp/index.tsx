"use client";
import React, { useState, useContext } from "react";
import { Container, Stack, Typography } from "@mui/material";
import { Input, Button } from "@/components";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { UserContext } from "@/contex/UserProvider";
import { useRouter } from "next/navigation";

const validationSchema = yup.object({
  email: yup
    .string()
    .max(100, "Имэйл хаяг 100 тэмдэгтээс хэтрэхгүй байна.")
    .required("Имэйл хаягыг заавал бөглөнө үү.")
    .email("Хүчинтэй имэйл хаяг байх ёстой."),
  name: yup.string().required("Нэр заавал оруулна уу."),
  address: yup.string().required("Хаяг заавал оруулна уу."),
  password: yup
    .string()
    .required("Нууц үгээ заавал бөглөнө үү.")
    .min(6, "Нууц үг хамгийн багадаа 6 тэмдэгт байх байх ёстой."),
  rePassword: yup
    .string()
    .required("Нууц үгээ заавал бөглөнө үү.")
    .min(6, "Нууц үг хамгийн багадаа 6 тэмдэгт байх байх ёстой."),
});

const SignUp = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();
  const formik = useFormik({
    onSubmit: async ({ email, password, rePassword, address, name }) => {
      console.log(email, password);
      try {
        const { data } = await axios.post("http://localhost:8080/auth/signup", {
          email: email,
          password: password,
          name: name,
          address: address,
        });
        router.replace("/");
        console.log("burtgelee");
      } catch (error) {
        console.log(error);
      }
    },

    initialValues: {
      email: "",
      password: "",
      rePassword: "",
      name: "",
      address: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        my: 10,
      }}
    >
      <Stack sx={{ display: "flex" }}>
        <Typography
          sx={{
            fontSize: 28,
            fontWeight: 700,
            display: "flex",
            justifyContent: "center",
          }}
        >
          Бүртгүүлэх
        </Typography>
        <Input
          label="Нэр"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          errorText={formik.errors.name}
        />
        <Input
          label="Имэйл"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          errorText={formik.errors.email}
        />
        <Input
          label="Хаяг"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          errorText={formik.errors.address}
        />
        <Input
          label="Нууц үг"
          showPassword
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          errorText={formik.errors.password}
        />
        <Input
          label="Нууц үг давтах"
          showPassword
          name="rePassword"
          value={formik.values.rePassword}
          onChange={formik.handleChange}
          errorText={formik.errors.rePassword}
        />
        <Typography sx={{ my: 5 }}>Үйлчилгээний нөхцөл зөвшөөрөх</Typography>
        <Button label="Бүртгүүлэх" onClick={formik.handleSubmit} />
      </Stack>
    </Container>
  );
};

export default SignUp;
