import { describe, it, expect, beforeEach, beforeAll } from "vitest";
import request from "supertest";
import { app } from "../index";
import { resetDb } from "./helpers/reset-db";

describe("Post /sum", () => {
    
        // beforeEach(async () => {
        //     console.log("cleaning DB");
        //     await resetDb()
            
        // });

    beforeAll(async () => {
        console.log("calling before All");
        await resetDb()
        
    })
    it("should return the sum of the two numbers", async () => {
        const{status, body} = await request(app).post("/sum").send({
             a: 1, b: 2 
            });
        expect(status).toBe(200);
        expect(body).toEqual({answer:3, id: expect.any(Number)});
    });
});