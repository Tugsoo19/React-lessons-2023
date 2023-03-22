const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provie an Email"],
        unique: [true, "Email Exist"],
    },
    password: {
        type: String,
        required: [true, "Please provie a password"],
        unique: false,
    }
})

const Users = mongoose.model('Users', usersSchema)

module.exports = Users