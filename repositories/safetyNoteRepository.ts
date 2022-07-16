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

export async function getNotesByUserId(userId: number) {
    const notes = await client.safetyNote.findMany({
        where: {
            userId,
        },
    });

    return notes;
}

export async function getNotesByIdAndUserId(id: number, userId: number) {
    const notes = await client.safetyNote.findFirst({
        where: {
            userId,
            id,
        },
    });

    return notes;
}

export async function deleteNote(id: number) {
    await client.safetyNote.delete({
        where: {
            id,
        },
    });
}
