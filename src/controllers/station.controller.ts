import { MESSAGES, STATUS } from "consts";
import { Request, Response } from "express";
import httpStatus from "http-status";
import {
  enterStationService,
  exitStationService,
  getStationByNameService,
  getStationsService,
} from "services/station.service";

export const getStationByName = async (req: Request, res: Response) => {
  const name = req.params.name;

  console.log ("inController: ", name);

  const response = await getStationByNameService(name);

  console.log ("inController: ", response);

  if (response === STATUS.STATION_NOT_EXIST) {
    res.status(httpStatus.OK).send(MESSAGES.STATION_DOES_NOT_EXIST);
  } else {
    res.status(httpStatus.OK).json(response);
  }
};

export const getStations = async (req: Request, res: Response) => {
  const stations = await getStationsService();
  res.status(httpStatus.OK).json(stations);
};

export const enterStation = async (req: Request, res: Response) => {
  const stationName = req.params.station;
  const { number } = req.body;
  const response = await enterStationService(stationName, number);

  if (response === STATUS.CARD_NOT_EXIST) {
    res.status(httpStatus.NOT_FOUND).send(MESSAGES.CARD_NOT_EXIST);
  } else if (response === STATUS.ALREADY_RIDING) {
    res.status(httpStatus.CONFLICT).send(MESSAGES.ALREADY_IN_SUBWAY);
  } else if (response === STATUS.NOT_ENOUGH_MONEY) {
    res.status(httpStatus.BAD_REQUEST).send(MESSAGES.NOT_ENOUGH_MONEY);
  } else {
    res.status(httpStatus.OK).json(response);
  }
};

export const exitStation = async (req: Request, res: Response) => {
  const stationName = req.params.station;
  const { number } = req.body;
  const response = await exitStationService(stationName, number);
  if (response === STATUS.ALREADY_EXIT) {
    res.status(httpStatus.CONFLICT).send(MESSAGES.ALREADY_OUT_OF_SUBWAY);
  } else {
    res.status(httpStatus.OK).json(response);
  }
};
