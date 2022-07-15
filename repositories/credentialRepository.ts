import { Credential } from "@prisma/client";
import client from "../src/database.js";

export type CredentialInsertData = Omit<Credential, "id">;
export type CredentialSchemaData = Omit<CredentialInsertData, "userId">;

export async function getCredentialByLabelAndUserId(
    label: string,
    userId: number
) {
    const credential = await client.credential.findFirst({
        where: {
            label,
            userId,
        },
    });

    return credential;
}

export async function insert(insertCredential: CredentialInsertData) {
    await client.credential.create({
        data: {
            ...insertCredential,
        },
    });
}

export async function getCredentialsByUserId(userId: number) {
    const credentials = await client.credential.findMany({
        where: {
            userId,
        },
    });

    return credentials;
}

export async function getCredentialsByIdAndUserId(id: number, userId: number) {
    const credentials = await client.credential.findFirst({
        where: {
            userId,
            id,
        },
    });

    return credentials;
}
