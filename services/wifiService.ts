import * as wifiRepository from "../repositories/wifiRepository.js";
import { WifiSchemaData } from "../repositories/wifiRepository.js";
import { cryptPassword, decryptPassword } from "../utils/passwordUtils.js";

export async function createWifi(data: WifiSchemaData, userId: number) {
    data.password = cryptPassword(data.password);
    await wifiRepository.insert({ ...data, userId });
}

export async function showWifi(userId: number, wifiId: number | undefined) {
    if (wifiId) {
        const wifi = await wifiRepository.getWifiByIdAndUserId(wifiId, userId);

        if (!wifi)
            throw {
                status: 404,
                message: "wifi not found for this account",
            };

        wifi.password = decryptPassword(wifi.password);
        return wifi;
    }

    const wifis = await wifiRepository.getWifiByUserId(userId);
    wifis.map((wifi) => {
        wifi.password = decryptPassword(wifi.password);
    });

    return wifis;
}

export async function deletewifi(userId: number, wifiId: number) {
    const wifi = await wifiRepository.getWifiByIdAndUserId(wifiId, userId);
    if (!wifi)
        throw {
            status: 404,
            message: "wifi not found for this account",
        };
    await wifiRepository.deleteWifi(wifiId);
}
