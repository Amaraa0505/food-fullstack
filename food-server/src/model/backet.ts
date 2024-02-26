import { Schema, model } from "mongoose";

const backetSchema = new Schema({
  user: { type: Schema.ObjectId, ref: "User", require: true },
  foods: [
    {
      food: { type: Schema.ObjectId, ref: "Food" },
      count: Number,
    },
  ],
});

const Backet = model("Backet", backetSchema);
export default Backet;
