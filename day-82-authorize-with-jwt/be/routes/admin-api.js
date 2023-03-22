const express = require('express')
const Users = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")


const adminApiRouter = express.Router()


adminApiRouter.post('/register', async (request, response) => {

    const { email, password } = request.body
    console.log(email, password);


    if (email && password) {

        const oldUser = await Users.findOne({ email: email })
        if (oldUser) {
            return response.json({ error: "Already registered email" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        Users.create({ email: email, password: hashedPassword })
            .then((data) => {
                response.status(201).json({
                    message: "User successfully created",
                    email: data.email,
                });
                return;
            })
            .catch((error) => {
                response.status(500).json({
                    success: false,
                    error,
                });
            });

    } else {
        return response.json({ error: "Input field is empty" })
    }

})

adminApiRouter.post('/login', async (request, response) => {
    try {
        const { email, password } = request.body
        if (!(email && password)) {
            response.status(400).json({
                message: "Utguudiig buren oruulna uu"
            })
            return

        }

        const user = await Users.findOne({ email })
        if (user) {
            const isMatch = await bcrypt.compare(password, user?.password)
            console.log(user);

            if (user && isMatch) {
                const jwtBody = {
                    user_id: user._id,
                    email
                }

                const token = jwt.sign(jwtBody, "MySuperDuperPrivateKey", { expiresIn: "24h" })

                response.status(200).json({
                    success: true,
                    status: "Successfully logged in",
                    token: token,
                    data: user,
                })
                return
            }
        } else {
            response.status(400).json({
                success: false,
                status: "Username and password doesn't match!"
            })
            return;
        }

    } catch (error) {
        response.status(500).json({
            data: "Aldaa garlaa",
            error: error

        })
        console.error(error);
    }

})

module.exports = adminApiRouter