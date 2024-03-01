import { TrainLineEntity } from "entities";
import { Request, Response } from "express";
import httpStatus from "http-status";
import {
  createLineService,
  getLineByNameService,
  getLinesService,
} from "services/trainline.service";

export const getTrainLineByName = async (req: Request, res: Response) => {
  const name = req.params.name;
  const line = await getLineByNameService(name);
  res.status(httpStatus.OK).json(line);
};

export const getTrainLines = async (req: Request, res: Response) => {
  const lines = await getLinesService();
  res.status(httpStatus.OK).json(lines);
};

export const createTrainLine = async (req: Request, res: Response) => {
  const { name, stations, fare } = req.body;
  const resLine = await createLineService(name, stations, fare);
  res.status(httpStatus.OK).json(resLine);
};
