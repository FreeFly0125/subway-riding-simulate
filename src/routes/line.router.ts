import { createLine } from "controllers";

const lineRouter = require("express").Router();

lineRouter.post("/", createLine);

export default lineRouter;