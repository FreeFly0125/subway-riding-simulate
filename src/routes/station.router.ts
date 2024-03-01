import {
  enterStation,
  exitStation,
  getStationByName,
  getStations,
} from "controllers/station.controller";
import express from "express";

const stationRouter = express.Router();

stationRouter.get("/", getStations);
stationRouter.get("/:name", getStationByName);
stationRouter.post("/:station/enter", enterStation);
stationRouter.post("/:station/exit", exitStation);

export default stationRouter;
