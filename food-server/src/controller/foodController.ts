import { Request, Response, NextFunction } from "express";
import Food from "../model/food";
import MyError from "../utils/myError";
import cloudinary from "../utils/cloudinary"


  export const createFood = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      console.log("FoodDtaa", req.body);
      const newFood = {...req.body}
      if (req.file) {
        const { secure_url } = await cloudinary.uploader.upload(req.file.path);
        newFood.image = secure_url;
      }
      await Food.create(newFood);
      res.status(201).json({ message: "Food succesfully created." }); //created status code 201
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
  
      const findFood = await Food.findById(foodId);
  
      if (!findFood) {
        throw new MyError(`${foodId}-тай food олдсонгүй.`, 400);
      }
      // const findCategory = Category.findOne({_id: categoryId})
      res.status(200).json({ message: `${foodId}-тай food олдлоо` }); // status cose 200 success
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
      const foods = await Food.find().populate("category")
  
      res.status(200).json({
        message: `Бүх хоол.`,
        foods,
      });
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



