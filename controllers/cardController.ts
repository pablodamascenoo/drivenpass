import { Request, Response } from "express";
import { CardSchemaData } from "../repositories/cardRepository";
import * as cardService from "../services/cardService.js";

export async function postCard(req: Request, res: Response) {
    const cardData: CardSchemaData = req.body;
    const { user } = res.locals;

    await cardService.createCard(cardData, user.id);
    res.sendStatus(200);
}
