import Joi from "joi";
import { InsertUserData } from "../repositories/userRepository.js";

const userSchema = Joi.object<InsertUserData>({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required(),
});

export default userSchema;
