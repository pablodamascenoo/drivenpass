import app from "../src/app.js";
import supertest from "supertest";

describe("POST /auth/sign-up", () => {
    it("409 on email already registered", async () => {
        const body = { email: "admin@gmail.com", password: "1234567890" };
        const response = await supertest(app).post("/auth/sign-up").send(body);
        const status = response.status;

        expect(status).toEqual(409);
    });
    it("422 on empty body", async () => {
        const response = await supertest(app).post("/auth/sign-up").send({});
        const status = response.status;

        expect(status).toEqual(422);
    });
    it("200 on valid input", async () => {
        const body = { email: "jose@gmail.com", password: "1234567890" };
        const response = await supertest(app).post("/auth/sign-up").send(body);
        const status = response.status;

        expect(status).toEqual(200);
    });
});

describe("POST /auth/sign-in", () => {
    it("422 on empty body", async () => {
        const response = await supertest(app).post("/auth/sign-in").send({});
        const status = response.status;

        expect(status).toEqual(422);
    });
    it("401 on wrong password", async () => {
        const body = { email: "admin@gmail.com", password: "1234567980" };
        const response = await supertest(app).post("/auth/sign-in").send(body);
        const status = response.status;

        expect(status).toEqual(401);
    });
    it("token on valid input", async () => {
        const body = { email: "admin@gmail.com", password: "1234567890" };
        const response = await supertest(app).post("/auth/sign-up").send(body);
        const token = response.body.token;

        expect(token).not.toBeNull();
    });
});
