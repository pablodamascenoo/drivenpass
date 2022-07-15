import Cryptr from "cryptr";

const CRYPTR = new Cryptr(process.env.CRYPTR_SECRET);

export function cryptPassword(password: string) {
    const encryptedPassword = CRYPTR.encrypt(password);
    return encryptedPassword;
}

export function decryptPassword(cryptedPassword: string) {
    const decryptedPassword = CRYPTR.decrypt(cryptedPassword);
    return decryptedPassword;
}
