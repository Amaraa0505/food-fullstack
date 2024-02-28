import { NextFunction, Request, Response } from "express";
import Basket from "../model/backet";
import { IReq } from "../utils/interface";
import MyError from "../utils/myError";
import { error } from "console";

export const addBasket = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  console.log("User", req.user);
  console.log("BodyYYYY", req.body);

  try {
    const findBasket = await Basket.findOne({ user: req.user._id }); ////

    if (!findBasket) {
      const basket = await Basket.create({
        user: req.user._id, ///
        foods: [
          {
            food: req.body.food,
            qty: req.body.quantity,
          },
        ],
        totalPrice: req.body.totalPrice,
      });
      res.status(200).json({ message: "Сагсанд хоол амжилттай нэмлээ-1" });
    } else {
      const findIndex = findBasket.foods.findIndex((el) => {
        return el.food.toString() === req.body.foodId; ///
      });
      console.log("Find", findIndex);
      // console.log("Foods", findBasket.foods);

      if (findIndex !== -1) {
        findBasket.foods[findIndex].qty = Number(req.body.quantity); ///;
        findBasket.totalPrice = Number(req.body.totalPrice);
      }
      console.log("ChangedFoods", findBasket.foods);

      await findBasket.save();
      res.status(200).json({ message: "Сагсанд хоол амжилттай нэмлээ-2" });
    }
  } catch (error) {
    next(error);
  }
};

// export const updateBasket = async (
//   req: IReq,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
// const findFoods = await Basket.findOne({ user: req.user._id });
// if (findFoods) {
//   const foodIndex = findFoods?.foods.findIndex((e)=>e.food == req.body.foods.food)
// findFoods!.foods?[foodIndex].qty = req.body.foods.quantity
// }
// } catch (error) {}
// };

// export const updateBasket = async (
//   req: IReq,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const findUser = await Basket.findOne({ user: req.user._id });
//     if (!findUser) {
//       console.log("User baihgui baina", error);
//     } else {
//       console.log("USER: ", findUser);

//       const findIndex = findUser.foods.findIndex(
//         (el) => el.food.toString === req.body.foodId
//       );
//       console.log("++");
//       if (findIndex) {
//         findUser.foods[findIndex].qty = Number(req.body.quantity);
//         findUser.totalPrice = Number(req.body.totalPrice);
//       }
//     }
//   } catch (error) {
//     next(error);
//   }
// };

export const getBasket = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const { basketId } = req.params;
    const basket = await Basket.findById(basketId);
    if (!basket) {
      throw new MyError(`sags oldsongui`, 400);
    }
    res.status(200).json({ message: `${basketId}basket oldoo` });
  } catch (error) {
    next(error);
  }
};

export const getAllBasket = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const baskets = await Basket.find();
    res.status(200).json({ message: `${baskets}buh baskets oldloo` });
  } catch (error) {
    next(error);
  }
};

// export const deleteBasket = async(req:IReq, res:Response, next:NextFunction){
//   try {
//     const {deleteId}=req.params
//     const basket = await Basket.findByIdAndDelete{deleteId}
// if(!deleteId){
// throw new MyError(`${deleteId} oldsongui`, 400)
// }
// res.status(200).json({message:"ustlaa"})
//   } catch (error) {
// next(error)
//   }
// }
