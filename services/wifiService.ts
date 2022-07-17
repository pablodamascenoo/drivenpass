import * as wifiRepository from "../repositories/wifiRepository.js";
import { WifiSchemaData } from "../repositories/wifiRepository.js";
import { cryptPassword } from "../utils/passwordUtils.js";

export async function createWifi(data: WifiSchemaData, userId: number) {
    data.password = cryptPassword(data.password);
    await wifiRepository.insert({ ...data, userId });
}
