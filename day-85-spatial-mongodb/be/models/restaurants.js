const mongoose = require('mongoose')


const restaurantsSchema = new mongoose.Schema({
    name: String,
    location: {
        type: {
            type: String,
            enum: ["Point"],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
}, {
    collection: 'restaurants',
});

const Restaurant = mongoose.model('Restaurant', restaurantsSchema)

module.exports = Restaurant