import { Router } from "express";
import authRouter from "./authRouter.js";
import credentialsRouter from "./credentialRouter.js";

const router = Router();

router.use(authRouter);
router.use(credentialsRouter);

export default router;
