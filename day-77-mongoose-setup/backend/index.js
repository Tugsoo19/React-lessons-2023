console.log("Day-77");

const express = require('express')
const mongoose = require('mongoose')
const apiRouter = require("./routes/api")

const PORT = 8181
const MONGO_CONNECTION_STRING = "mongodb+srv://tugsoo:bunny%401928@mongodb-tugsoo.a6x20yd.mongodb.net/test";

const app = express()
app.use(express.json())

app.use(apiRouter)

mongoose.connect(MONGO_CONNECTION_STRING)
    .then(() => console.log('Database connected successfully'))
    .catch((error) => console.error(error))

app.get('/', (request, response) => {
    response.send('<h1>Day-77 Mongoose Application</h1>')
})

app.listen(PORT, () => {
    console.log(`Express Apllication is running on http://localhost:${PORT}`);
})