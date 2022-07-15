import { SafetyNote } from "@prisma/client";
import client from "../src/database.js";

export type SafetyNoteSchemaData = Omit<SafetyNote, "id" | "userId">;
export type SafetyNoteInsertData = Omit<SafetyNote, "id">;

export async function insert(data: SafetyNoteInsertData) {
    await client.safetyNote.create({
        data: {
            ...data,
        },
    });
}

export async function getNotesByUserIdAndTitle(title: string, userId: number) {
    const note = await client.safetyNote.findFirst({
        where: {
            title,
            userId,
        },
    });

    return note;
}
