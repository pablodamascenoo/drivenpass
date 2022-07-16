import * as cardRepository from "../repositories/cardRepository.js";
import { CardSchemaData } from "../repositories/cardRepository.js";
import { cryptPassword } from "../utils/passwordUtils.js";

export async function createCard(cardData: CardSchemaData, userId: number) {
    const cardFound = await cardRepository.findCardByNameAndUserId(
        cardData.name,
        userId
    );
    if (cardFound)
        throw { status: 409, message: "card title already registered" };
    cardData.password = cryptPassword(cardData.password);
    cardData.cvc = cryptPassword(cardData.cvc);
    cardRepository.insert({ ...cardData, userId });
}
