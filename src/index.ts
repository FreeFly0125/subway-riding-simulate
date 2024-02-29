import { ROUTE_VERSION } from "config";
// import { connectDB } from "config/database";
import { MESSAGES } from "consts";
import cors from "cors";
import dotenv from "dotenv";
import express, { NextFunction } from "express";
import { requestLoggerMiddleware } from "middleware";
import appRouter from "routes";
import { Logger } from "utils";
import { DBConnect } from "utils/dbConnector";

dotenv.config();

const app = express();

app
  .use(cors())
  .use(express.json())
  .use(requestLoggerMiddleware)
  .use("/health", (_req, res) => res.send("OK"))
  .use(`/api/${ROUTE_VERSION}`, appRouter);

const PORT = process.env.SERBER_PORT || 8000;

const dbSetup = async (next: NextFunction) => {
  try {
    await DBConnect.getConnection();
    Logger.log(MESSAGES.DATABASE_CONNECT_SUCCESS);
    next();
  } catch (error) {
    Logger.error(MESSAGES.DATABASE_CONNECT_FAILED, "\n", error);
  }
};

dbSetup(() => {
  try {
    app.listen(PORT, () => {
      Logger.log(MESSAGES.SERVER_RUNNING_SUCCESS);
    });
  } catch (error) {
    Logger.error(MESSAGES.SERVER_RUNNING_FAILED, "\n", error);
  }
});
