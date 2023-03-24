const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")


require('dotenv').config()
const apiRouter = require('./routes/api')
const adminApiRouter = require('./routes/admin-api')

const app = express()


const PORT = process.env.PORT
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING

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