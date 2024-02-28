import { NextFunction, Router, Response } from "express";
import {
  addBasket,
  getAllBasket,
  getBasket,
} from "../controller/backetController";
import { IReq } from "../utils/interface";
import { authenticate } from "../middleware/auth";

const router = Router();

router.route("/").post(authenticate, addBasket).get(getAllBasket);
// router.route("/basketId").put(authenticate).get(getBasket).put(updateBasket);

export default router;
