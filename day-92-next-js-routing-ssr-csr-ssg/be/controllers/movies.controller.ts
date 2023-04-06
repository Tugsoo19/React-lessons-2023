import { Request, Response } from "express"
import MoviesModel from "../models/movies.model"

export const getMovies = async (req: Request, res: Response) => {

    const page: number = Number(req.query.page) || 0;
    const moviesPerPage: number = Number(req.query.moviesPerPage) || 15;

    try {
        const movies = await MoviesModel.find({})
            .limit(moviesPerPage)
            .skip(moviesPerPage * page);
        res.status(200).json(movies)
    } catch (error) {
        res.status(404).json({ data: [] })
    }
}