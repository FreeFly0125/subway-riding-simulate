import { Request, Response } from "express";

export const getTrainLine = (req: Request, res: Response) => {
  console.log("Get Trainline!");
};

export const getTrainLines = (req: Request, res: Response) => {
  console.log("Get Trainlines!");
};

export const createTrainLine = (req: Request, res: Response) => {
  console.log("Create TrainLines!");
};
