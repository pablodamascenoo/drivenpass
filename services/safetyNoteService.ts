import * as safetyNoteRepository from "../repositories/safetyNoteRepository.js";
import { SafetyNoteInsertData } from "../repositories/safetyNoteRepository.js";

export async function postSafetyNote(data: SafetyNoteInsertData) {
    const note = await safetyNoteRepository.getNotesByUserIdAndTitle(
        data.title,
        data.userId
    );
    if (note)
        throw {
            status: 409,
            message: "note with same title already registered",
        };

    await safetyNoteRepository.insert({ ...data });
}

export async function showNotes(userId: number, noteId: number | undefined) {
    if (noteId) {
        const note = await safetyNoteRepository.getNotesByIdAndUserId(
            noteId,
            userId
        );

        if (!note)
            throw {
                status: 404,
                message: "Note not found for this account",
            };

        return note;
    }

    const notes = await safetyNoteRepository.getNotesByUserId(userId);
    return notes;
}

export async function deleteNote(userId: number, noteId: number) {
    const note = await safetyNoteRepository.getNotesByIdAndUserId(
        noteId,
        userId
    );

    if (!note)
        throw {
            status: 404,
            message: "Note not found for this account",
        };

    await safetyNoteRepository.deleteNote(noteId);
}
