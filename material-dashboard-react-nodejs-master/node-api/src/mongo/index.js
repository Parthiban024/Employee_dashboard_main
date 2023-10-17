import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnect = () => {
  mongoose.connection.once("open", () => console.log("DB connection"));
  return mongoose.connect(
    `mongodb+srv://ParthiGMR:Parthiban7548@parthibangmr.1quwer2.mongodb.net/test`,
    { keepAlive: true }
  );
};
