import cors from "cors";
import express from "express";
import authRouter from "./routes/authRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(authRouter);

export default app;
