import { Router } from "express";
import { getTheaterById, getTheaters, searchTheaters } from '../controllers/theater.controller'

const theaterRouter = Router();

theaterRouter.get('/list', getTheaters);

theaterRouter.get('/byId/:id', getTheaterById)

theaterRouter.get('/search', searchTheaters)

export default theaterRouter