import {
  createTrainLine,
  getTrainLine,
  getTrainLines,
} from "controllers/trainline.controller";
import express from "express";

const lineRouter = express.Router();

lineRouter.get("/", getTrainLines);
lineRouter.get("/:id", getTrainLine);
lineRouter.post("/", createTrainLine);

export default lineRouter;
