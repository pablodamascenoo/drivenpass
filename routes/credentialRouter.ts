import { Router } from "express";
import {
    getCredential,
    postCredential,
} from "../controllers/credentialController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import verifyToken from "../middlewares/verifyToken.js";
import credentialsSchema from "../schemas/credentialsSchema.js";

const credentialsRouter = Router();

credentialsRouter.post(
    "/credentials/create",
    verifyToken,
    schemaValidator(credentialsSchema),
    postCredential
);
credentialsRouter.get("/credentials/show", verifyToken, getCredential);

export default credentialsRouter;
