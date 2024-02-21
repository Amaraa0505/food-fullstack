import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getCategory,
  updateCategory,
} from "../controller/categoryController";
import { upload } from "../utils/multer";
import { authenticate, authorize } from "../middleware/auth";

const router = Router();

router
  .route("/")
  .get(getAllCategory)
  .post(upload.single("image"), createCategory);

router
  .route("/:categoryId")
  .get(getCategory)
  .put(updateCategory)
  .delete(authenticate, authorize("Admin", "User"), deleteCategory);

export default router;
