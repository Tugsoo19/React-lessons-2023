const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")
const apiRouter = require('./routes/api')
const adminApiRouter = require('./routes/admin-api')


const app = express()
const PORT = 8181

const MONGO_CONNECTION_STRING = "mongodb+srv://tugsoo:bunny%401928@mongodb-tugsoo.a6x20yd.mongodb.net/day-82";

app.use(express.json())
app.use(cors())
app.use('/api', apiRouter)
app.use('/adminApi', adminApiRouter)

app.get('/', (request, response) => {
    response.send('<h1>Hello Day-82 Autorize with jwt</h1>')
})

app.listen(PORT, () => {

    mongoose
        .connect(MONGO_CONNECTION_STRING)
        .then(() => console.log('Database connected successfully'))
        .catch((error) => console.error(error))


    console.log(`Express Apllication is running on http://localhost:${PORT}`);
})