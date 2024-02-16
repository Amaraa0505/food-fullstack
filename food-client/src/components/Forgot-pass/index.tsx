"use client";

import { ChangeEvent, useState } from "react";

import { Container, Stack } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const MyStepper = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [user, setUser] = useState({
    email: "",
    password: "",
    otp: "",
  });

  const handleNext = async () => {
    try {
      const data = await axios.post("http://localhost:8080/verify/send-email", {
        email: user.email,
      });
      setActiveStep((prev) => prev + 1);
    } catch (error) {
      toast.error("Email илгээхэд алдаа гарлаа.");
      console.log(error);
    }
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Container>
      {activeStep === 1 && (
        <StepOne
          email={user.email}
          handleNext={handleNext}
          handleChangeInput={handleChangeInput}
        />
      )}
      {activeStep === 2 && (
        <StepTwo
          email={user.email}
          otp={user.otp}
          handleNext={handleNext}
          handleChangeInput={handleChangeInput}
        />
      )}
      {activeStep === 3 && <StepThree />}
    </Container>
  );
};

export default MyStepper;
