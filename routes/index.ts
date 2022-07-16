import { Router } from "express";
import authRouter from "./authRouter.js";
import cardRouter from "./cardRouter.js";
import credentialsRouter from "./credentialRouter.js";
import safetyNoteRouter from "./safetyNoteRouter.js";

const router = Router();

router.use(authRouter);
router.use(credentialsRouter);
router.use(safetyNoteRouter);
router.use(cardRouter);

export default router;
