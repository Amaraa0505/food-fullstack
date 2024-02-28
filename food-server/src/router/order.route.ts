import {Router} from "express"
import {createOrder} from "../controller/orderController"
import { authenticate, authorize } from "../middleware/auth";

const orderRoute = Router()

orderRoute.route("/").post(authenticate, createOrder)

export default orderRoute