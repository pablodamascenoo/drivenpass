import { User } from "@prisma/client";
import * as credentialRepository from "../repositories/credentialRepository.js";
import { CredentialSchemaData } from "../repositories/credentialRepository.js";
import { cryptPassword, decryptPassword } from "../utils/passwordUtils.js";

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

export async function showCredentials(
    userId: number,
    postId: number | undefined
) {
    if (postId) {
        const credential =
            await credentialRepository.getCredentialsByIdAndUserId(
                postId,
                userId
            );

        if (!credential)
            throw {
                status: 404,
                message: "Credential not found for this account",
            };

        credential.password = decryptPassword(credential.password);
        return credential;
    }

    const credentials = await credentialRepository.getCredentialsByUserId(
        userId
    );
    credentials.map((credential) => {
        credential.password = decryptPassword(credential.password);
    });

    return credentials;
}

export async function deleteCredential(userId: number, postId: number) {
    const credential = await credentialRepository.getCredentialsByIdAndUserId(
        postId,
        userId
    );

    if (!credential)
        throw {
            status: 404,
            message: "Credential not found for this account",
        };

    await credentialRepository.deleteCredential(postId);
}
