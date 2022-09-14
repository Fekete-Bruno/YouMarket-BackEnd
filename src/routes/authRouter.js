import { signUp, signIn } from "../controllers/authController.js";
import express from "express";
import validateUser from "../middlewares/userValidationMiddleware.js";
import validateLogin from "../middlewares/loginValidationMiddleware.js";

const authRouter = express.Router();

authRouter.post("/sign-up", validateUser, signUp);
authRouter.post("/sign-in", validateLogin, signIn);

export default authRouter;
