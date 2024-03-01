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
  const station = await getStationByNameService(name);
  res.status(httpStatus.OK).json(station);
};

export const getStations = async (req: Request, res: Response) => {
  const stations = await getStationsService();
  res.status(httpStatus.OK).json(stations);
};

export const enterStation = async (req: Request, res: Response) => {
  const stationName = req.params.station;
  const { number } = req.body;
  console.log ("paramsparamsparamsparamsparamsparams: ", req.params);
  const cardStatus = await enterStationService(stationName, number);
  res.status(httpStatus.OK).json(cardStatus);
};

export const exitStation = async (req: Request, res: Response) => {
  const stationName = req.params.station;
  const { number } = req.body;
  const cardStatus = await exitStationService(stationName, number);
  res.status(httpStatus.OK).json(cardStatus);
};
