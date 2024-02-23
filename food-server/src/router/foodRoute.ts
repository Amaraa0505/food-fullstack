import { Router } from "express";
import { upload } from "../utils/multer";
import { uploadFile } from "../controller/uploadController";
import {
  getFood,
  createFood,
  deleteFood,
  updateFood,
  getAllFood,
} from "../controller/foodController";

const foodRoute = Router();

foodRoute.route("/:foodId").get(getFood).put(updateFood).delete(deleteFood);

foodRoute.route("/").get(getAllFood).post(upload.single("image"), createFood);

export default foodRoute;
