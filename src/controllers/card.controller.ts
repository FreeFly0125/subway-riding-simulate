import { MESSAGES, STATUS } from "consts";
import { Request, Response } from "express";
import httpStatus from "http-status";
import {
  createCardService,
  getCardByNumberService,
  getCardsService,
} from "services/card.service";

export const getCardByNumber = async (req: Request, res: Response) => {
  const number = req.params.number;
  const response = await getCardByNumberService(number);
  if (response === STATUS.CARD_NOT_EXIST) { 
    res.status(httpStatus.NOT_FOUND).send(MESSAGES.CARD_NOT_EXIST);
  } else {
    res.status(httpStatus.OK).json(response);
  }
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
