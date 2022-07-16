import { Router } from "express";
import { postCard } from "../controllers/cardController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import verifyToken from "../middlewares/verifyToken.js";
import cardSchema from "../schemas/cardSchema.js";

const cardRouter = Router();

cardRouter.post(
    "/cards/create",
    verifyToken,
    schemaValidator(cardSchema),
    postCard
);

export default cardRouter;
