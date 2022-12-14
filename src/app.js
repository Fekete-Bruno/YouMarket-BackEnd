import cors from "cors";
import express from "express";
import authRouter from "./routes/authRouter.js";
import cartRouter from "./routes/cartRouter.js";
import mainPageRouter from "./routes/mainPageRouter.js";
import orderRouter from "./routes/orderRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(authRouter);
app.use(mainPageRouter);
app.use(cartRouter);
app.use(orderRouter);

export default app;
