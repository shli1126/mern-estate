import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
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

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, "Wrong credential"));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    //spserate password from others, don't want to return password to the users for safety
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_toekn", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (err) {
    next(err);
  }
};
