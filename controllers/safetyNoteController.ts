import { Request, Response } from "express";
import * as safetyNoteService from "../services/safetyNoteService.js";

export async function postSafetyNote(req: Request, res: Response) {
    const { title, note } = req.body;
    const { user } = res.locals;

    await safetyNoteService.postSafetyNote({ title, note, userId: user.id });
    return res.sendStatus(201);
}

export async function getNotes(req: Request, res: Response) {
    const { id } = req.query;
    const { user } = res.locals;

    if (id !== undefined && isNaN(+id))
        throw { status: 422, message: "id must be a number" };

    const notes = await safetyNoteService.showNotes(user.id, +id);
    return res.send(notes);
}

export async function deleteNote(req: Request, res: Response) {
    const { id } = req.params;
    const { user } = res.locals;

    await safetyNoteService.deleteNote(user.id, +id);
    return res.sendStatus(204);
}
