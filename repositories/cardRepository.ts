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
