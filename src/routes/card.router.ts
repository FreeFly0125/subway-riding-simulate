import { createNewCard, getCard, getCards } from "controllers/card.controller";
import express from "express";

const cardRouter = express.Router();

cardRouter.get("/", getCards);
cardRouter.get("/:id", getCard);
cardRouter.post("/", createNewCard);

export default cardRouter;
