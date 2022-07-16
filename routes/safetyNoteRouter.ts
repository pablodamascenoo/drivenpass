import { Router } from "express";
import {
    deleteNote,
    getNotes,
    postSafetyNote,
} from "../controllers/safetyNoteController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import verifyToken from "../middlewares/verifyToken.js";
import safetyNoteSchema from "../schemas/safetyNoteSchema.js";

const safetyNoteRouter = Router();

safetyNoteRouter.post(
    "/safety-notes/create",
    verifyToken,
    schemaValidator(safetyNoteSchema),
    postSafetyNote
);
safetyNoteRouter.get("/safety-notes/show", verifyToken, getNotes);
safetyNoteRouter.delete("/safety-notes/:id/delete", verifyToken, deleteNote);

export default safetyNoteRouter;
