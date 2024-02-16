import { Router } from "express";
import {
  sendEmailToUser,
  verifyOtp,
  resetPass,
  verifyUser,
} from "../controller/verifyController";

const router = Router();

router.route("/user").get(verifyUser);
router.route("/send-email").post(sendEmailToUser);
router.route("/otp").post(verifyOtp);
router.route("/resetPass").put(resetPass);

export default router;
