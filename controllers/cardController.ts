import { Request, Response } from "express";
import { CardSchemaData } from "../repositories/cardRepository";
import * as cardService from "../services/cardService.js";

export async function postCard(req: Request, res: Response) {
    const cardData: CardSchemaData = req.body;
    const { user } = res.locals;

    await cardService.createCard(cardData, user.id);
    res.sendStatus(200);
}

export async function getCards(req: Request, res: Response) {
    const { user } = res.locals;
    const { id } = req.query;

    if (id !== undefined && isNaN(+id))
        throw { status: 422, message: "id must be a number" };

    const cards = await cardService.showCards(user.id, +id);
    return res.send(cards);
}

export async function deleteCard(req: Request, res: Response) {
    const { user } = res.locals;
    const { id } = req.params;

    await cardService.deleteCard(user.id, +id);
    return res.sendStatus(204);
}
