import { Wifi } from "@prisma/client";
import client from "../src/database.js";

export type WifiSchemaData = Omit<Wifi, "id" | "userId">;
export type WifiInsertData = Omit<Wifi, "id">;

export async function insert(wifiData: WifiInsertData) {
    await client.wifi.create({
        data: { ...wifiData },
    });
}
