import { Router } from "express";

import { getBacket, createBacket } from "../controller/backetController";
import { authenticate } from "../middleware/auth";

const backetRoute = Router();

backetRoute.route("/").get(authenticate, getBacket).post(createBacket);

export default backetRoute;
