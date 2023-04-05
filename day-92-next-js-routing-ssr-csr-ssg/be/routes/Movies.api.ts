import { Router } from "express";
import { getMovies } from "../controllers/movies.controller";

const moviesRouter = Router();

moviesRouter.get('/list', getMovies)

export default moviesRouter