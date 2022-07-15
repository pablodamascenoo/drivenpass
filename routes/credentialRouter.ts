import { Router } from "express";
import { postCredential } from "../controllers/credentialController.js";
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

export default credentialsRouter;
