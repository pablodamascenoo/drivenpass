import * as cardRepository from "../repositories/cardRepository.js";
import { CardSchemaData } from "../repositories/cardRepository.js";
import { cryptPassword, decryptPassword } from "../utils/passwordUtils.js";

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

export async function showCards(userId: number, cardId: number | undefined) {
    if (cardId) {
        const card = await cardRepository.getCardByIdAndUserId(cardId, userId);

        if (!card)
            throw {
                status: 404,
                message: "Card not found for this account",
            };

        card.password = decryptPassword(card.password);
        card.cvc = decryptPassword(card.cvc);
        return card;
    }

    const cards = await cardRepository.getCardsByUserId(userId);
    cards.map((card) => {
        card.password = decryptPassword(card.password);
        card.cvc = decryptPassword(card.cvc);
    });

    return cards;
}

export async function deleteCard(userId: number, cardId: number) {
    const card = await cardRepository.getCardByIdAndUserId(cardId, userId);

    if (!card)
        throw {
            status: 404,
            message: "Card not found for this account",
        };

    await cardRepository.deleteCard(cardId);
}
