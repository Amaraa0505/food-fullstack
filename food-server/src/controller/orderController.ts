import { NextFunction, Response } from "express";
import { IReq } from "../utils/interface";
import MyError from "../utils/myError";
import User from "../model/user";


const createOrder = async (req:IReq, res:Response, next:NextFunction) => {
  try {
    const { userId } = req.params; 
    const { orderDetails } = req.body; 

    
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }


    const newOrder = {
      orderNo: generateOrderNumber(), 
      payment: {
        paymentAmount: orderDetails.paymentAmount,
        status: 'unpaid', 
        createdAt: new Date(),
      },
      address: {
        khoroo: orderDetails.khoroo,
        duureg: orderDetails.duureg,
        buildingNo: orderDetails.buildingNo,
        info: orderDetails.info,
      },
      delivery: {
        status: 'Pending', 
      },
    };


    user.orders.push(newOrder);


    await user.save();

    return res.status(201).json({ message: 'Order created successfully', order: newOrder });
  } catch (error) {
    console.error('Error creating order:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const generateOrderNumber = () => {

  return 'ORD' + Date.now().toString();
};

export { createOrder };
