import { getPath } from "controllers";

const pathRouter = require("express").Router();

pathRouter.get("/", getPath);

export default pathRouter;