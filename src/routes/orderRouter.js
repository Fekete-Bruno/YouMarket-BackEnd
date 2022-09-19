import express from "express";
import {
  postOrder,
  getOrder,
  updateProductStock,
} from "../controllers/orderController.js";
import validateOrder from "../middlewares/orderValidationMiddleware.js";

const orderRouter = express.Router();

orderRouter.get("/order", getOrder);
orderRouter.post("/order", validateOrder, postOrder);

export default orderRouter;
