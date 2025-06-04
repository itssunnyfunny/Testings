import {describe, expect ,it} from 'vitest';
 import request from 'supertest';
 import{ app }from '../index';


 describe("POST /sum", () => {
    it("should return the sum of two numbers", async () => {
      const response = await request(app).post("/sum").send({
         a: 1,
         b: 2
         });

      expect(response.status).toBe(200);
      expect(response.body.answer).toBe(3);
    });

    it("should return 411 when invalid input", async () => {
        const response = await request(app).post("/sum").send({
            a: 1,
            b: "2"
        });
        expect(response.status).toBe(411);
        expect(response.body.message).toBe("invalid input");
    });

   
  });