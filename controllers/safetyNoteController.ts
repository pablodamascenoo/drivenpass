import { Request, Response } from "express";
import * as safetyNoteService from "../services/safetyNoteService.js";

export async function postSafetyNote(req: Request, res: Response) {
    const { title, note } = req.body;
    const { user } = res.locals;

    await safetyNoteService.postSafetyNote({ title, note, userId: user.id });
    return res.sendStatus(201);
}
