import { ROUTE_VERSION } from "config";
import { MESSAGES } from "consts";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { requestLoggerMiddleware } from "middleware";
import appRouter from "routes";

dotenv.config();

const app = express();

app
  .use(cors())
  .use(express.json())
  .use(requestLoggerMiddleware)
  .use("/health", (_req, res) => res.send("OK"))
  .use(`/api/${ROUTE_VERSION}`, appRouter);

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  console.log(MESSAGES.SERVER_SUCCESSFULLY_STARTED);
});
