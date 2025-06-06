import {describe, expect ,it,vi} from 'vitest';
 import request from 'supertest';
 import{ app }from '../index';
import { prisma } from '../__mock__/db';


// vi.mock("../db", () => ({
//     prisma: {
//         sum: {
//             create: vi.fn(),
//         },
//     },
// }));

vi.mock("../db");

 describe("POST /sum", () => {
    it("should return the sum of two numbers", async () => {
      // for return the mocked value
      prisma.sum.create.mockResolvedValue({
        id: 1,
        answer: 3,
        type: "sum",
        a: 1,
        b: 2
      });
      const response = await request(app).post("/sum").send({
         a: 1,
         b: 2
         });

      expect(response.status).toBe(200);
      expect(response.body.id).toBe(1);
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