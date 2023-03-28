const mongoose = require('mongoose')

const shippingAddressSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    }

})

const ShippingAddress = mongoose.model("ShippingAddress", shippingAddressSchema)

module.exports = ShippingAddress