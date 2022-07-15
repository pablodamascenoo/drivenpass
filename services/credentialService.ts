import { User } from "@prisma/client";
import * as credentialRepository from "../repositories/credentialRepository.js";
import { CredentialSchemaData } from "../repositories/credentialRepository.js";
import { cryptPassword } from "../utils/passwordUtils.js";

export async function createCredential(data: CredentialSchemaData, user: User) {
    const foundCredential =
        await credentialRepository.getCredentialByLabelAndUserId(
            data.label,
            user.id
        );
    if (foundCredential)
        throw {
            status: 409,
            message: "label of credential already registered",
        };

    data.password = cryptPassword(data.password);
    await credentialRepository.insert({ ...data, userId: user.id });
}
