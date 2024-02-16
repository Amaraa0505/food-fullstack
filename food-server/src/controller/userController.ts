import { Request, Response, NextFunction } from "express";
import MyError from "../utils/myError";

import User from "../model/user";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Headers", req.headers);
  try {
    const users = await User.find();
    res.status(201).json({ message: "Бүх хэрэглэгч олдлоо", users });
  } catch (error) {
    res.status(400).json({
      message: "Бүх хэрэглэгчийн мэдээллийг авах үед алдаа гарлаа.",
      error,
    });
  }
};

// export const uploadPhoto = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const result = await cloudinary.upload(req?.file!.path);
//     console.log(result.secure_url);
//     res.json({ message: "ok" });

//   } catch (error) {}
// };
