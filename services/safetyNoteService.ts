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
