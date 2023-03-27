const { Router } = require('express');
const { getRestaurant } = require('../controllers/restaurant.controller');


const route = Router()

route.get('/restaurants', getRestaurant)

module.exports = route;