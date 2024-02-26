import { NextFunction, Router, Response } from "express";
import { addBasket } from "../controller/backetController";
import { IReq } from "../utils/interface";
import { authenticate } from "../middleware/auth";

const router = Router();

router.route("/").post(authenticate, addBasket);

export default router;