import { Router } from "express";
import {
    deleteCard,
    getCards,
    postCard,
} from "../controllers/cardController.js";
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
cardRouter.delete("/cards/:id/delete", verifyToken, deleteCard);

export default cardRouter;
