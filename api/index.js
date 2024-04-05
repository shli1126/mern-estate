import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

//cannot directly use process.env in backend, npm i dotenv first
dotenv.config();

//Connect to database
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connect to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

//middleware
const app = express();
app.use(express.json());
app.use(cookieParser());
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//baseURL
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
// error handleing middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
