import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import MyError from "../utils/myError";

// import { customAlphabet } from "nanoid";
import bcrypt from "bcrypt";
import { sendEmail } from "../utils/sendEmail";
import User from "../model/user";

// const nanoid = customAlphabet("1234567890", 4);

export const sendEmailToUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("SEND_EMAIL");
  try {
    const { email } = req.body;

    const otp = Math.round(Math.random() * 10000)
      .toString()
      .padStart(4, "0"); ///4 orontoi tooo uusgeh

    const findUser = await User.findOne({ email }); ///hereglegch haij oloh

    if (!findUser) {
      throw new MyError(`Hereglegch olgdsongui`, 400);
    }

    console.log("OTP", otp);
    const salt = await bcrypt.genSalt(10);

    findUser.otp = await bcrypt.hash(otp, salt);

    await findUser.save();

    await sendEmail({ email, otp }); ///ogogdson emaild otp ilgeene

    res.status(201).json({ message: "Email амжилттай илгээгдлээ." });
  } catch (error) {
    console.log("ERR", error);
    res.status(400).json({
      message: "Email илгээх үед алдаа гарлаа.",
      error,
    });
  }
};

export const verifyOtp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, otp } = req.body;
    console.log("email", email);
    console.log("OTP", otp);

    const findUser = await User.findOne({ email });
    console.log("USER", findUser);
    if (!findUser) {
      throw new MyError(`Hereglegch oldsongui`, 400);
    }

    const validOtp = await bcrypt.compare(otp, findUser?.otp); /// otp shalgah

    if (!validOtp) {
      throw new MyError(`kod buruu baina`, 400);
    }
    console.log("valid", validOtp);
    res.status(200).json({ message: "OTP is validated" });
  } catch (error) {
    next(error);
  }
};

export const verifyUser = async (req: Request, res: Response) => {
  try {
    const { token } = req.query;

    const { email } = jwt.verify(
      ///
      token as string,
      process.env.JWT_PRIVATE_KEY as string ///
    ) as { email: string };

    const findUser = await User.findOne({ email: email });

    if (!findUser) {
      throw new MyError(`not verified`, 400);
    } else {
      findUser.isVerified = true;
    }

    await findUser?.save(); ///

    res.status(200).send(`<h1 style="color: green">Valid Link </h1>`);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Server is internal error", error });
  }
};
export const resetPass = async (req: Request, res: Response) => {
  try {
    const { email, newPassword } = req.body;
    const findUser = await User.findOne({ email });
    if (!findUser) {
      throw new MyError(`Hereglegch oldsongui`, 400);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    findUser.updateOne({ password: hashedPassword }); ///

    findUser.password = hashedPassword;
    await findUser.save();

    res.status(200).json({ message: "Password амжилттай солигдлоо" });
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: "Internal error" });
  }
};
