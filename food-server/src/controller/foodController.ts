import { Request, Response, NextFunction } from "express";
import Food from "../model/food";
import MyError from "../utils/myError";

export const createFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newFood = req.body;
    console.log("REQ BODY: ", req.body);
    await Food.create(newFood);
    console.log("++++", newFood);
    res.status(201).json({ message: "food uuslee" });
  } catch (error) {
    next(error);
  }
};

export const getFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    const food = await Food.findById(foodId);

    if (!food) {
      throw new MyError(`${foodId}-tai hool oldsongui`, 400);
    }

    res.status(200).json({ message: `${foodId}-hool oldloo`, food });
  } catch (error) {
    next(error);
  }
};

export const getAllFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const food = await Food.find().populate("Category", "name");

    res.status(200).json({ message: `buh hool oldloo`, food });
  } catch (error) {
    next(error);
  }
};

export const updateFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    const updateFood = req.body;
    const food = await Food.findByIdAndUpdate(foodId);

    if (!food) {
      throw new MyError(`${foodId}-tai oldsongui`, 400);
    }

    res.status(200).json({ message: `${foodId}-hool shinechillee`, foodId });
  } catch (error) {
    next(error);
  }
};

export const deleteFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    const food = await Food.findByIdAndDelete(foodId);
    if (!food) {
      throw new MyError(`${foodId}-mai oldsongui`, 400);
    }
    res.status(200).json({ message: `${foodId}-egory ustlaa`, food });
  } catch (error) {
    next(error);
  }
};
