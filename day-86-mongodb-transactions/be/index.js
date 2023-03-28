const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")

require('dotenv').config()

const app = express()
const transactionApi = require('./routes/transaction.route')
const productApi = require('./routes/product.route')

const PORT = process.env.PORT
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING

app.use(express.json())
app.use(cors())
app.use('/transaction', transactionApi)
app.use('/product', productApi)


app.get('/', (request, response) => {
    response.send('<h1>Day-86 MongoDB Transaction</h1>')
})

app.listen(PORT, () => {

    mongoose
        .connect(MONGO_CONNECTION_STRING)
        .then(() => console.log('Database connected successfully'))
        .catch((error) => console.error(error))


    console.log(`Express Apllication is running on http://localhost:${PORT}`);
})