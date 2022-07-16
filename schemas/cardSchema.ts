import Joi from "joi";
import { CardSchemaData } from "../repositories/cardRepository.js";

const cardSchema = Joi.object<CardSchemaData>({
    number: Joi.string().pattern(/[0-9]/).required(),
    name: Joi.string().required(),
    cvc: Joi.string()
        .pattern(/^[0-9]{3}$/)
        .required(),
    expDate: Joi.string()
        .pattern(/^(0[1-9]|1[0-2])\/[2-9]{2}$/)
        .required(),
    isVirtual: Joi.boolean().required(),
    type: Joi.string().valid("credito", "debito", "ambos").required(),
    password: Joi.string().required(),
});

export default cardSchema;
