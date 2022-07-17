import Joi from "joi";
import { WifiSchemaData } from "../repositories/wifiRepository.js";

const wifiSchema = Joi.object<WifiSchemaData>({
    title: Joi.string().required(),
    name: Joi.string().required(),
    password: Joi.string().required(),
});

export default wifiSchema;
