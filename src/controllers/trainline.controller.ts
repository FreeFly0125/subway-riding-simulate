import { TrainLineEntity } from "entities";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { createLineService, getLineService, getLinesService } from "services/trainline.service";

export const getTrainLine = async (req: Request, res: Response) => {
  const id = req.params.id;
  const line = await getLineService(parseInt(id));
  res.status(httpStatus.OK).json(line);
};

export const getTrainLines = async (req: Request, res: Response) => {
  const lines = await getLinesService();
  res.status(httpStatus.OK).json(lines);
};

export const createTrainLine = async (req: Request, res: Response) => {
  const { name, stations } = req.body;
  const resLine = await createLineService(name, stations);
  res.status(httpStatus.OK).json(resLine);
};
