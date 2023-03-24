const express = require('express')
const Users = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const UserRole = require('../models/userRole')


const adminApiRouter = express.Router()


adminApiRouter.post('/register', async (request, response) => {

    const data = request.body
    console.log(request.body);



    if (data) {

        const oldUser = await Users.findOne({ email: data.email })
        if (oldUser) {
            return response.json({ error: "Already registered email" })
        }

        const hashedPassword = await bcrypt.hash(data.password, 10)
        data.password = hashedPassword;

        try {
            const user = await Users.create(data)
            const result = await user.populate("userrole")
            response.status(201).json({
                message: "User successfully created",
                data: result
            });
            return;
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error,
            })
        }

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

adminApiRouter.post('/role/create', async (req, res) => {
    const { name } = req.body;
    const result = await UserRole.create({ name })

    res.status(200).json({
        data: result,
    })
})

adminApiRouter.get('/role/list', async (req, res) => {
    const result = await UserRole.find({})
    res.status(200).json({
        data: result,
    })
})

module.exports = adminApiRouter