import Joi from "joi";
import { SafetyNoteSchemaData } from "../repositories/safetyNoteRepository";

const safetyNoteSchema = Joi.object<SafetyNoteSchemaData>({
    title: Joi.string().max(50).required(),
    note: Joi.string().max(1000).required(),
});

export default safetyNoteSchema;
