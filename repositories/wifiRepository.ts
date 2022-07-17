import { Wifi } from "@prisma/client";
import client from "../src/database.js";

export type WifiSchemaData = Omit<Wifi, "id" | "userId">;
export type WifiInsertData = Omit<Wifi, "id">;

export async function insert(wifiData: WifiInsertData) {
    await client.wifi.create({
        data: { ...wifiData },
    });
}

export async function getWifiByUserId(userId: number) {
    const wifi = await client.wifi.findMany({
        where: {
            userId,
        },
    });

    return wifi;
}

export async function getWifiByIdAndUserId(id: number, userId: number) {
    const wifi = await client.wifi.findFirst({
        where: {
            userId,
            id,
        },
    });

    return wifi;
}

export async function deleteWifi(id: number) {
    await client.wifi.delete({
        where: {
            id,
        },
    });
}
