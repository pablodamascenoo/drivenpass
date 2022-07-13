import * as userRepository from "../repositories/userRepository.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

export async function signUp(email: string, password: string) {
    const foundUser = await userRepository.findByEmail(email);
    if (foundUser)
        throw { status: 409, message: "this email is already registered" };
    const cryptedPassword = cryptPassword(password);
    await userRepository.insert({ email, password: cryptedPassword });
}

function cryptPassword(password: string) {
    const SALT = bcrypt.genSaltSync();
    return bcrypt.hashSync(password, SALT);
}
