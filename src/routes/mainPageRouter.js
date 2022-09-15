import express from "express";
import { getProducts } from "../controllers/mainPageController.js";

const mainPageRouter = express.Router();

mainPageRouter.get("/", getProducts);

export default mainPageRouter;