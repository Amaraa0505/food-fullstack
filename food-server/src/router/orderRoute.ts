import { Router } from "express";
import { createOrder, getAllOrder } from "../controller/orderController";
import { authenticate } from "../middleware/auth";

const orderRoute = Router();

orderRoute.route("/").post(authenticate, createOrder).get(authenticate, getAllOrder);

export default orderRoute;