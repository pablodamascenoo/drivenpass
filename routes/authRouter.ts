import { Router } from "express";
import { signUp } from "../controllers/authController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import userSchema from "../schemas/userSchema.js";

const authRouter = Router();

authRouter.post("/auth/sign-up", schemaValidator(userSchema), signUp);
authRouter.post("/auth/sign-in", schemaValidator(userSchema));

export default authRouter;
