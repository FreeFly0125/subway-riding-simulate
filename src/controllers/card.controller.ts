import { Request, Response } from "express";
import httpStatus from "http-status";
import {
  createCardService,
  getCardByIDService,
  getCardByNumberService,
  getCardsService,
} from "services/card.service";

export const getCardByID = async (req: Request, res: Response) => {
  const id = req.params.id;
  const cards = await getCardByIDService(parseInt(id));
  res.status(httpStatus.OK).json(cards);
};

export const getCardByNumber = async (req: Request, res: Response) => {
  const name = req.params.name;
  const cards = await getCardByNumberService(name);
  res.status(httpStatus.OK).json(cards);
};

export const getCards = async (req: Request, res: Response) => {
  const cards = await getCardsService();
  res.status(httpStatus.OK).json(cards);
};

export const createNewCard = async (req: Request, res: Response) => {
  const { number, amount } = req.body;
  const newCard = await createCardService(number, amount);
  res.status(httpStatus.OK).json(newCard);
};
