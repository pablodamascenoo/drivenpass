import { Router } from "express";
import authRouter from "./authRouter.js";
import credentialsRouter from "./credentialRouter.js";
import safetyNoteRouter from "./safetyNoteRouter.js";

const router = Router();

router.use(authRouter);
router.use(credentialsRouter);
router.use(safetyNoteRouter);

export default router;
