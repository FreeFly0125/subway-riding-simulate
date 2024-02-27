import express from "express";
import lineRouter from "./line.router";
import pathRouter from "./path.router";

const appRoutes = express.Router();

appRoutes.use("/train-line", lineRouter);
appRoutes.use("/route", pathRouter);

export default appRoutes;
