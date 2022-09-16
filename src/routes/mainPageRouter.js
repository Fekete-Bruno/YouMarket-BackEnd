import express from "express";
import { getProductById, getProducts } from "../controllers/mainPageController.js";

const mainPageRouter = express.Router();

mainPageRouter.get("/", getProducts);

mainPageRouter.get("/:productId",getProductById);

export default mainPageRouter;