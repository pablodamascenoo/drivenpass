import { Card } from "@prisma/client";
import client from "../src/database.js";

export type CardSchemaData = Omit<Card, "id" | "userId">;
export type CardInsertData = Omit<Card, "id">;

export async function insert(card: CardInsertData) {
    await client.card.create({
        data: { ...card },
    });
}

export async function findCardByNameAndUserId(name: string, userId: number) {
    const card = await client.card.findFirst({
        where: {
            name,
            userId,
        },
    });
    return card;
}

export async function getCardsByUserId(userId: number) {
    const cards = await client.card.findMany({
        where: {
            userId,
        },
    });

    return cards;
}

export async function getCardByIdAndUserId(id: number, userId: number) {
    const card = await client.card.findFirst({
        where: {
            userId,
            id,
        },
    });

    return card;
}

export async function deleteCard(id: number) {
    await client.card.delete({
        where: {
            id,
        },
    });
}
