import express from 'express';
import { addCart, getCart } from '../controllers/cartController.js';
import validateCart from '../middlewares/cartValidationMiddleware.js';

const cartRouter = express.Router();

cartRouter.get("/cart", validateCart, getCart);

cartRouter.post("/cart",validateCart,addCart);

export default cartRouter;