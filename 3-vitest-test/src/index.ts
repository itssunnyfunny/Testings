import express from "express";
import {z} from "zod";
import { prisma } from "./db";


export const app = express();

app.use(express.json());

const sumInput = z.object({
    a: z.number(),
    b: z.number(),
});

app.post("/sum", async (req, res) => {
    const parsedResponse = sumInput.safeParse(req.body);
     if(!parsedResponse.success) {
        res.status(411).json({
           message: "invalid input"
        });
        return;
     };

     const answer = parsedResponse.data.a + parsedResponse.data.b;
// mocking if database returns a value
    const result = await prisma.sum.create({
        data: {
            a: parsedResponse.data.a,
            b: parsedResponse.data.b,
            answer,
            type: "sum"
        }
     })
    res.json({
        answer,
        id : result.id
    })
});


app.get("/sum", (req, res) => {
    const parsedResponse = sumInput.safeParse(req.query);
     if(!parsedResponse.success) {
        res.status(411).json({
           message: "invalid input"
        });
        return;
     };

     const answer = parsedResponse.data.a + parsedResponse.data.b;
    res.json({
        answer
    })
});