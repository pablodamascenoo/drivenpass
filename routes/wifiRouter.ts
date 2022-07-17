import { Router } from "express";
import { getWifis, postWifi } from "../controllers/wifiController.js";
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
wifiRouter.get("/wifi/show", verifyToken, getWifis);

export default wifiRouter;
