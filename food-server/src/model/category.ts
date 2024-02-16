import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    require: [true, "категорийн нэрийг оруулна уу"],
    unique: true,
    maxLength: [50, "категорийн нэр 50-аас хэтрэхгүй"],
  },
  description: {
    type: String,
    required: [true, "категорийн талбарийг оруулна уу"],
  },
  image: {
    type: String,
    default: "no-category-photo",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Category = model("category", categorySchema);
export default Category;
