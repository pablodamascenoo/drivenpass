import { Request, Response } from "express";
import { WifiSchemaData } from "../repositories/wifiRepository.js";
import * as wifiService from "../services/wifiService.js";

export async function postWifi(req: Request, res: Response) {
    const wifiData: WifiSchemaData = req.body;
    const { user } = res.locals;
    await wifiService.createWifi(wifiData, user.id);
    return res.sendStatus(201);
}
