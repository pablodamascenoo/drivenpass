import { Router } from "express";
import authRouter from "./authRouter.js";
import cardRouter from "./cardRouter.js";
import credentialsRouter from "./credentialRouter.js";
import safetyNoteRouter from "./safetyNoteRouter.js";
import wifiRouter from "./wifiRouter.js";

const router = Router();

router.use(authRouter);
router.use(credentialsRouter);
router.use(safetyNoteRouter);
router.use(cardRouter);
router.use(wifiRouter);

export default router;
