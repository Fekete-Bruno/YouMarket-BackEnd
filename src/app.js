import cors from "cors";
import express, { application } from "express";

const app = express();
app.use(cors());
app.use(express.json());

export default app;