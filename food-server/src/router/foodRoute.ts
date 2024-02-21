import { Router } from "express";
import {
  getFood,
  createFood,
  deleteFood,
  updateFood,
  getAllFood,
} from "../controller/foodController";

const foodRoute = Router();

foodRoute.route("/:foodId").get(getFood).put(updateFood).delete(deleteFood);

foodRoute.route("/").get(getAllFood).post(createFood);

export default foodRoute;
