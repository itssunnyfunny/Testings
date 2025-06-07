import express from "express";
import { prismaClient } from "./db";


export const app = express();

app.use(express.json());

app.post("/sum", async (req, res) => {
    const a = req.body.a;
    const b = req.body.b;

    if (a>1000000 || b>1000000) {
        res.status(422).json({
            message: "Sorry we don't support numbers bigger than 1000000"
        });
        return;
        
    }
    const answer = a + b;
    const result = await prismaClient.request.create({
        data: {
            a,
            b,
            answer,
            type: "ADD"
        }
    });
    res.json({
        answer,
        id: result.id

    })
});