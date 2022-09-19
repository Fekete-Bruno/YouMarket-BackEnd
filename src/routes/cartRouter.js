import express from 'express';
import { addCart, deleteCart, getCart } from '../controllers/cartController.js';
import validateCart from '../middlewares/cartValidationMiddleware.js';

const cartRouter = express.Router();

cartRouter.get("/cart", validateCart, getCart);

cartRouter.post("/cart",validateCart,addCart);

cartRouter.delete("/cart",validateCart,deleteCart);

export default cartRouter;