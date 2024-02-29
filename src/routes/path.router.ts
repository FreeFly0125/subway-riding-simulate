import { searchPath } from "controllers";
import express from "express";

const pathRouter = express.Router();

pathRouter.get("/", searchPath);

export default pathRouter;
