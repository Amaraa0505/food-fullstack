import { NextFunction, Response } from "express";
import { IReq } from "../utils/interface";
import MyError from "../utils/myError";
import User from "../model/user";
import Basket from "../model/backet";

export const createOrder = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("working", )
    const newOrder = {
      orderNo: "#" + Math.floor(Math.random() * 1000000),
      payment: {
        paymentAmount: 0,
      },
      address: {
        khoroo: "",
        duureg: "",
        buildingNo: "",
      },
    };
   
    const findUser = await User.findById(req.user._id);
    console.log("userr", newOrder)
    if (!findUser) {
      throw new MyError(`Бүртгэлгүй хэрэглэгч байна.`, 400);
    }
    findUser.orders.push(newOrder);
    const orders = await findUser.save();

    // const Basket.findByIdAndDelete(basketId._id)

    res.status(200).json({ message: "Захиалга амжилттай үүслээ.", orders });
  } catch (error) {
    next(error);
  }
};

export const getAllOrder = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const orders = await User.find(req.user._id);

    res.status(200).json({
      message: `Бүх order олдлоо`,
      orders,
    });
  } catch (error) {
    next(error);
  }
};