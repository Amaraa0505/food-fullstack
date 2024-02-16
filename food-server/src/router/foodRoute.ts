import { Router } from "express";
import {
  getFood,
  createFood,
  deleteFood,
  updateFood,
  getAllFood,
} from "../controller/foodController";

const categoryRoute = Router();

categoryRoute.route("/:foodId").get(getFood).put(updateFood).delete(deleteFood);

categoryRoute.route("/").get(getAllFood).post(createFood);

export default categoryRoute;
