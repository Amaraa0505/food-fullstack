import { NextFunction, Request, Response } from "express";
import Category from "../model/category";
import MyError from "../utils/myError";
import cloudinary from "../utils/cloudinary";

import Backet from "../model/backet";

export const createBacket = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newBacket = req.body;
    await Category.create(newBacket);

    res.status(201).json({ message: "backet амжилттай үүслээ." });
  } catch (error) {
    next(error);
  }
};

export const getBacket = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const backet = await Backet.findOne({
      //   user: req.user._id,
    }).populate("foods.food");
    if (!backet) {
      res.status(400).json({ message: "cannot found backet " });
    }
  } catch (error) {
    console.log("ERR", error);
  }
};
