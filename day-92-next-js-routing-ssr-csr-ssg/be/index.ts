// const express = require('express')
// const cors = require('cors')
// const mongoose = require("mongoose")

import express, { Express, Request, Response } from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import theaterRouter from "./routes/Theaters.api";
import commentsRouter from "./routes/Comments.api";
import moviesRouter from "./routes/Movies.api";

dotenv.config();
// require('dotenv').config()

const app: Express = express()
const PORT = process.env.PORT || 8181;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://localhost:27017/test";

let name: string = "<h1>Hello Day-92 NEXTJS routing ssr csr ssg</h1>";
let phoneNumber: number = 88008800;
let isMarried: boolean = false;
let sheeps: Array<string> = ['sheep1', 'sheep2', 'sheep3']
let sheep: string[] = ['sheep1', 'sheep2', 'sheep3']

let sheepObject: { name: string; age: number } = {
    name: 'sheep1',
    age: 1,
};

sheepObject.name = "sheep2";
sheepObject.age = 2


interface Student {
    name: string,
    age: number,
    isVerified: boolean,
}

//name = 12;


app.use(express.json())
app.use(cors())


app.get('/', (req: Request, res: Response) => {
    res.send(name)
})

app.use('/theaters', theaterRouter)
app.use('/comments', commentsRouter)
app.use('/movies', moviesRouter)

app.listen(PORT, () => {

    mongoose
        .connect(MONGO_CONNECTION_STRING)
        .then(() => console.log('Database connected successfully'))
        .catch((error) => console.error(error))


    console.log(`Express Application is running on http://localhost:${PORT}`);
})