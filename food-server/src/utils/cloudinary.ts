import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

const CLOUD_NAME = process.env.CLOUD_NAME || "";
const CLOUD_API_KEY = process.env.CLOUD_API_KEY || "";
const CLOUD_API_SECRET = process.env.CLOUD_API_SECRET || "";

cloudinary.config({
  cloud_name: "dfmpovkwv",
  api_key: "127878393366119",
  api_secret: "8L7lP4tqQhBvAI7txETNwGmDGGw",
});
export default cloudinary;
