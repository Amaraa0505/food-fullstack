import { Request, Response, NextFunction } from "express";
import cloudinary from "../utils/cloudinary";

export const uploadFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("file", req.file);
  try {
    const result = await cloudinary.uploader.upload(req.file?.path as string);

    res.send("ok==" + result.secure_url); ///path harah link
  } catch (error) {
    next(error);
  }
};
