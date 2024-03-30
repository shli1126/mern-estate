import express from "express";
import { signup, signin} from "../controllers/auth.controller.js";

//user router to make CRUD operation, what to do exactly is specified in controller
const router = express.Router();
router.post("/signup", signup);
router.post("/signin", signin)

export default router;
