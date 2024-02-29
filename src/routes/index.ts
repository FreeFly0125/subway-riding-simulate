import express from "express";
import lineRouter from "./trainline.router";
import cardRouter from "./card.router";
import stationRouter from "./station.router";
import pathRouter from "./path.router";

const appRouter = express.Router();

appRouter.use('/train-line', lineRouter);
appRouter.use('/card', cardRouter);
appRouter.use('/station', stationRouter);
appRouter.use('/route', pathRouter);

export default appRouter;
