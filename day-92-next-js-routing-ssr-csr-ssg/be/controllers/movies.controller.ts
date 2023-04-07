import { Request, Response } from "express"
import MoviesModel from "../models/movies.model"

export const getMovies = async (req: Request, res: Response) => {

    const page: number = Number(req.query.page) || 0;
    const moviesPerPage: number = Number(req.query.moviesPerPage) || 20;

    try {
        const movies = await MoviesModel.find({})
            .limit(moviesPerPage)
            .skip(moviesPerPage * page)
            .sort({ year: -1 })
        res.status(200).json(movies)
    } catch (error) {
        res.status(404).json({ data: [] })
    }
}