const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")
const todoRouter = require('./routes/todo-routes')
const categoryRouter = require('./routes/category-routes')


const app = express()
const PORT = 8181

const MONGO_CONNECTION_STRING = "mongodb+srv://tugsoo:bunny%401928@mongodb-tugsoo.a6x20yd.mongodb.net/test";

app.use(express.json())
app.use(cors())
app.use("/todo", todoRouter)
app.use('/category', categoryRouter)

app.get('/', (request, response) => {
    response.send('<h1>Hello Day-81 Insert/Update/Delete Many</h1>')
})


app.listen(PORT, () => {

    mongoose
        .connect(MONGO_CONNECTION_STRING)
        .then(() => console.log('Database connected successfully'))
        .catch((error) => console.error(error))


    console.log(`Express Apllication is running on http://localhost:${PORT}`);
})