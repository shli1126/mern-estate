import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  // get from req body using postman
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  //create new data entry
  const newUser = new User({ username, email, password: hashedPassword });
  //async with await
  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (err) {
    next(errorHandler(550, "error from the function"));
  }
};
