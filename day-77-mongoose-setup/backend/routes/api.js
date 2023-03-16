
const { response } = require('express')
const express = require('express')
const User = require('../models/Users')
const Router = express.Router()




Router.get('/user', async (request, response) => {
    const userId = request.query.id;
    console.log(userId);

    const user = await User.findOne({ _id: userId })
    response.json({ data: user })
})

// Get user by Email
Router.get('/userbyEmail', async (request, response) => {
    const userEmail = request.query.email;
    console.log(userEmail);

    const foundUser = await User.find({ email: userEmail }, '_id name email modifiedOn',
        { sort: "lastLogin: 1", }).exec()

    response.json(foundUser)
})


Router.get("/userGetEmail", async (request, response) => {
    const userEmail = request.query.email;

    const foundUser = await User.findByUserEmail(userEmail);

    response.json({
        data: foundUser,
    })
})

Router.get('/users', async (request, response) => {

    const result = await User.find({})
    console.log(result);
    response.json({ data: result })
})

Router.post('/user', async (request, response) => {
    const body = request.body;
    console.log(body);

    const newUser = new User(body)

    const result = await newUser.save()
    console.log(result);

    response.json({
        data: result,
    })
})

Router.delete('/user', async (request, response) => {
    const body = request.body;
    console.log(body);

    const result = await User.findOneAndDelete({ _id: body.id })

    response.json({
        data: result,
    })
})


Router.put("/updateOneUser", async (request, response) => {
    const body = request.body;
    console.log(body);
    const result = await User.updateOne(
        { id: "6412780e55885c97fd760ec0" },
        { $set: { lastLogin: Date.now() } }
    );

    response.json({ data: result })
})
module.exports = Router