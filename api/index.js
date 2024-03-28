import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

//cannot directly use process.env in backend, npm i dotenv first
dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connect to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
