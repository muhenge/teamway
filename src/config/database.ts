import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (): Promise<void> => {
  const mongoUrl = process.env.MONGO_URL;


  if (!mongoUrl) {
    throw new Error("MongoDB connection string is not defined.");
  }

  try {
    await mongoose.connect(mongoUrl);
    console.log("DATABASE CONNECTED");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Unable to connect to MongoDB");
  }
};

export default connectDB;
