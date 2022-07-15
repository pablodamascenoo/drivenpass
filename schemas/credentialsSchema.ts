import Joi from "joi";
import { CredentialSchemaData } from "../repositories/credentialRepository.js";

const credentialsSchema = Joi.object<CredentialSchemaData>({
    label: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    url: Joi.string().uri().required(),
});

export default credentialsSchema;
