const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")


require('dotenv').config()

const app = express()
const restaurantApi = require('./routes/restaurants.routes')
const neighborhoodApi = require('./routes/neighborhoods.routes')


const PORT = process.env.PORT
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING

app.use(express.json())
app.use(cors())
app.use('/restaurant', restaurantApi)
app.use('/neighborhoods', neighborhoodApi)


app.get('/', (request, response) => {
    response.send('<h1>Hello Day-85 Spatial MongoDB</h1>')
})

app.listen(PORT, () => {

    mongoose
        .connect(MONGO_CONNECTION_STRING)
        .then(() => console.log('Database connected successfully'))
        .catch((error) => console.error(error))


    console.log(`Express Apllication is running on http://localhost:${PORT}`);
})