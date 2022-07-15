import { Router } from "express";
import {
    deleteCredential,
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
credentialsRouter.delete(
    "/credentials/:id/delete",
    verifyToken,
    deleteCredential
);

export default credentialsRouter;
