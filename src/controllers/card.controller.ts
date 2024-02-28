import { Request, Response } from "express";

export const getCard = (req: Request, res: Response) => {
  console.log("Get Card!");
};

export const getCards = (req: Request, res: Response) => {
  console.log("Get Cards!");
};

export const createNewCard = (req: Request, res: Response) => {
  console.log("Create Card!");
};
