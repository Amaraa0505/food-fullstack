import { Request, Response, NextFunction } from "express";
import cloudinary from "../utils/cloudinary";

export const uploadFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("file", req.file);
  try {
    console.log("FILEЖЖ", req.file);
    //multer front endess ywuulsan fileiig barij awaad bidnii zaaj ugsun fileruu hiigeed bidnii req file ruu medeeluudiig ywuuldag dotor hiij ugdug

    const result = await cloudinary.uploader.upload(req.file?.path!);
    res.send("ok===>" + result.secure_url);
    console.log("RESULT", result);
  } catch (error) {
    next(error);
  }
};