import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("database connected successfully");
  } catch (error) {
    console.error("database connection failed:", error);
    process.exit(1); // Exit the process with failure
  }
}

export default connectDB;