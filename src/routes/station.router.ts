import {
  enterStation,
  exitStation,
  getStation,
  getStations,
} from "controllers/station.controller";
import express from "express";

const stationRouter = express.Router();

stationRouter.get("/", getStations);
stationRouter.get("/:id", getStation);
stationRouter.post("/:station/enter", enterStation);
stationRouter.post("/:station/exit", exitStation);

export default stationRouter;
