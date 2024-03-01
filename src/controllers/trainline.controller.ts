import { MESSAGES, STATUS } from "consts";
import { Request, Response } from "express";
import httpStatus from "http-status";
import {
  createLineService,
  getLineByNameService,
  getLinesService,
} from "services/trainline.service";

export const getTrainLineByName = async (req: Request, res: Response) => {
  const name = req.params.name;
  const response = await getLineByNameService(name);
  if (response === STATUS.LINE_NOT_EXIST) {
    res.status(httpStatus.OK).send(MESSAGES.TRAINLINE_DOES_NOT_EXIST);
  } else {
    res.status(httpStatus.OK).json(response);
  }
};

export const getTrainLines = async (req: Request, res: Response) => {
  const lines = await getLinesService();
  res.status(httpStatus.OK).json(lines);
};

export const createTrainLine = async (req: Request, res: Response) => {
  const { name, stations, fare } = req.body;
  const response = await createLineService(name, stations, fare);
  if (response === STATUS.TRAIN_LINE_EXIST) {
    res.status(httpStatus.OK).send(MESSAGES.TRAIN_LINE_ALREADY_EXIST);
  } else {
    res.status(httpStatus.OK).json(response);
  }
};
