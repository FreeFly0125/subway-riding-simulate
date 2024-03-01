import {
  createTrainLine,
  getTrainLineByName,
  getTrainLines,
} from "controllers/trainline.controller";
import express from "express";

const lineRouter = express.Router();

lineRouter.get("/", getTrainLines);
lineRouter.get("/:name", getTrainLineByName);
lineRouter.post("/", createTrainLine);

export default lineRouter;
