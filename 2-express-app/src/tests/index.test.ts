import {describe, expect, it} from '@jest/globals'
 import request from 'supertest';
 import{ app }from '../intdex';



 describe("POST /sum", () => {
    it("should return the sum of two numbers", async () => {
      const response = await request(app).post("/sum").send({
         a: 1,
         b: 2
         });

      expect(response.status).toBe(200);
      expect(response.body.answer).toBe(3);
    });

   
  });

  describe("GET /sum", () => {
    it("should return the sum of two numbers", async () => {
      const response = await request(app).get("/sum").query({
         a: 12,
         b: 223
         });

      expect(response.status).toBe(200);
      expect(response.body.answer).toBe(235);
    });

     // this is for header test 
    it ("should return the sum of negative numbers", async () => {
        const response = await request(app).get("/sum").set({
           a: "1",
           b: "-2"
           }).send();
  
        expect(response.status).toBe(200);
        expect(response.body.answer).toBe(-3);
      })
  });