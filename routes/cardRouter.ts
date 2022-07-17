import { Router } from "express";
import { getCards, postCard } from "../controllers/cardController.js";
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
cardRouter.get("/cards/show", verifyToken, getCards);

export default cardRouter;
