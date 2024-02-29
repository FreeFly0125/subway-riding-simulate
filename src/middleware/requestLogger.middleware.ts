import { Request, Response, NextFunction } from "express";
import { Logger } from "utils";

export const requestLoggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.path !== "/health") {
    Logger.group(`------ New ${req.method} Request ------`);
    Logger.log("Path: ", req.path);

    if (Object.keys(req.query).length > 0) {
      Logger.log("Query: ", req.query);
    }

    if (Object.keys(req.params).length > 0) {
      Logger.log("Params: ", req.params);
    }

    if (Object.keys(req.body).length > 0) {
      Logger.log("Body: ", req.body);
    }
    Logger.groupEnd();
  }
  next();
};
