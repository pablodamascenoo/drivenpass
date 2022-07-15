import { Request, Response } from "express";
import { CredentialSchemaData } from "../repositories/credentialRepository.js";
import * as credentialService from "../services/credentialService.js";

export async function postCredential(req: Request, res: Response) {
    const { user } = res.locals;
    const data: CredentialSchemaData = req.body;

    await credentialService.createCredential(data, user);
    return res.sendStatus(201);
}

export async function getCredential(req: Request, res: Response) {
    const { user } = res.locals;
    const { id } = req.query;

    if (isNaN(+id)) throw { status: 422, message: "id must be a number" };

    const credentials = await credentialService.showCredentials(user.id, +id);
    return res.send(credentials);
}
