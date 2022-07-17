import { Router } from "express";
import { postWifi } from "../controllers/wifiController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import verifyToken from "../middlewares/verifyToken.js";
import wifiSchema from "../schemas/wifiSchema.js";

const wifiRouter = Router();

wifiRouter.post(
    "/wifi/create",
    verifyToken,
    schemaValidator(wifiSchema),
    postWifi
);

export default wifiRouter;
