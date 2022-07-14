import client from "../src/database.js";
import { User } from "@prisma/client";

export type InsertUserData = Omit<User, "id">;

export async function insert(userData: InsertUserData) {
    await client.user.create({
        data: {
            email: userData.email,
            password: userData.password,
        },
    });
}

export async function findById(userId: number) {
    const foundUser = await client.user.findFirst({
        where: {
            id: userId,
        },
    });

    return foundUser;
}

export async function findByEmail(email: string) {
    const foundUser = await client.user.findFirst({
        where: {
            email,
        },
    });

    return foundUser;
}
