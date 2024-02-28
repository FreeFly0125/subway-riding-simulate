import { Request, Response } from "express";

export const getStation = (req: Request, res: Response) => {
  console.log("Get Station!");
};

export const getStations = (req: Request, res: Response) => {
  console.log("Get Stations!");
};

export const enterStation = (req: Request, res: Response) => {
  console.log("Enter Station!");
};

export const exitStation = (req: Request, res: Response) => {
  console.log("Exit Station!");
};
