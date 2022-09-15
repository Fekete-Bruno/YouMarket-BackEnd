import cors from "cors";
import express from "express";
import authRouter from "./routes/authRouter.js";
import mainPageRouter from "./routes/mainPageRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(authRouter);
app.use(mainPageRouter);

export default app;
