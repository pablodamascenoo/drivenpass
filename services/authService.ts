import * as userRepository from "../repositories/userRepository.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export async function signUp(email: string, password: string) {
    const foundUser = await userRepository.findByEmail(email);
    if (foundUser)
        throw { status: 409, message: "this email is already registered" };
    const cryptedPassword = cryptPassword(password);
    await userRepository.insert({ email, password: cryptedPassword });
}

export async function signIn(email: string, password: string) {
    const foundUser = await userRepository.findByEmail(email);
    if (!foundUser) throw { status: 404, message: "user not found" };
    verifyPassword(password, foundUser.password);
    const token = generateToken(email);
    return token;
}

function cryptPassword(password: string) {
    const SALT = bcrypt.genSaltSync();
    return bcrypt.hashSync(password, SALT);
}

function verifyPassword(password: string, cryptedPassword: string) {
    if (!bcrypt.compareSync(password, cryptedPassword))
        throw { status: 401, message: "wrong password" };
}

function generateToken(email: string) {
    const data = { email };
    const config = { expiresIn: process.env.JWT_EXPIRES };
    const token = jwt.sign(data, process.env.JWT_SECRET, config);
    return token;
}
