import { Response, Request, NextFunction } from "express";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("ERR MIDD=====>", err.message);

  res.status(500).json({
    message: err.message || "internal server error",
  });
};

export default errorHandler;
