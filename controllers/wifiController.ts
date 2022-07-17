import { Request, Response } from "express";
import { WifiSchemaData } from "../repositories/wifiRepository.js";
import * as wifiService from "../services/wifiService.js";

export async function postWifi(req: Request, res: Response) {
    const wifiData: WifiSchemaData = req.body;
    const { user } = res.locals;
    await wifiService.createWifi(wifiData, user.id);
    return res.sendStatus(201);
}

export async function getWifis(req: Request, res: Response) {
    const { user } = res.locals;
    const { id } = req.query;

    if (id !== undefined && isNaN(+id))
        throw { status: 422, message: "id must be a number" };

    const wifis = await wifiService.showWifi(user.id, +id);
    return res.send(wifis);
}
