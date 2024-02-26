import express, { Application, Request, Response } from "express";
import color from "colors";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./config/db";
import authRoute from "./router/authRoute";
import userRoute from "./router/userRoute";
import verifyRoute from "./router/verifyRoute";
import foodRoute from "./router/foodRoute";
import categoryRoute from "./router/categoryRoute";
import errorHandler from "./middleware/errorHandler";
import uploadRoute from "./router/uploadRoute";
import backetRoute from "./router/backetRoute";
// import transactionRoute from "./router/transactionRoute"

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI as string;

const app: Application = express();

connectDB(MONGO_URI);

app.use(cors());
app.use(express.json());
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/categories", categoryRoute);
app.use("/verify", verifyRoute);
app.use("/food", foodRoute);
app.use("/upload", uploadRoute);
app.use("/backet", backetRoute);
// app.use("/transaction", transactionRoute)

app.use(errorHandler);

app.listen(PORT, () => console.log(color.rainbow("Server is running " + PORT)));
