import {
  createNewCard,
  getCardByID,
  getCardByNumber,
  getCards,
} from "controllers/card.controller";
import express from "express";

const cardRouter = express.Router();

cardRouter.get("/", getCards);
cardRouter.get("/:id", getCardByID);
cardRouter.get("/:number", getCardByNumber);
cardRouter.post("/", createNewCard);

export default cardRouter;
