import { NextFunction, Request, Response } from "express";
import Category from "../model/category";
import MyError from "../utils/myError";
import cloudinary from "../utils/cloudinary";

export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("RB", req.body);
    console.log("RF", req.file);
    const newCategory = { ...req.body };

    if (req.file) {
      /// why file
      const { secure_url } = await cloudinary.uploader.upload(req.file.path);
      newCategory.image = secure_url;
    }

    await Category.create(newCategory);

    res.status(201).json({ message: "Категори амжилттай үүслээ." });
  } catch (error) {
    next(error);
  }
};

export const getCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findById(categoryId);

    if (!category) {
      throw new MyError(`${categoryId}-тэй категори олдсонгүй.`, 400);
    }

    res.status(200).json({
      message: `${categoryId}-тэй категори олдлоо`,
      category,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await Category.find();

    res.status(200).json({
      message: `Бүх категори олдлоо`,
      categories,
    });
  } catch (error) {
    next(error);
  }
};

export const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { categoryId } = req.params;
    const updateCategory = req.body;

    const category = await Category.findByIdAndUpdate(
      categoryId,
      updateCategory
    );

    if (!category) {
      throw new MyError(`${categoryId}-тэй категори олдсонгүй.`, 400);
    }

    res.status(200).json({
      message: `${categoryId}-тэй категори шинэчлэгдлээ.`,
      category,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findByIdAndDelete(categoryId);

    if (!category) {
      throw new MyError(`${categoryId}-тэй категори олдсонгүй.`, 400);
    }

    res.status(200).json({
      message: `${categoryId}-тэй категори устгалаа.`,
      category,
    });
  } catch (error) {
    next(error);
  }
};
