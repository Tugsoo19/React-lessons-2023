import TheaterModel from "../models/theaters.model";
import { Request, Response } from 'express'

export const getTheaters = async (req: Request, res: Response) => {

    const page: number = Number(req.query.page) || 0;
    const theatersPerPage: number = Number(req.query.theatersPerPage) || 5;

    try {
        const theaters = await TheaterModel.find({})
            .limit(theatersPerPage)
            .skip(theatersPerPage * page);
        res.status(200).json(theaters);
    } catch (error) {
        res.status(404).json({ data: [] })
    }
}

export const getTheaterById = async (req: Request, res: Response) => {
    try {
        const theater = await TheaterModel.find({
            theaterId: Number(req.params.id)
        });
        res.status(200).json(theater)
    } catch (error) {
        res.status(404).json({ data: [] })
    }
}

export const searchTheaters = async (req: Request, res: Response) => {

    const keyword: string = String(req.query.keyword);

    try {
        const theater = await TheaterModel.find({
            $or:
                [
                    { "location.address.city": { $regex: keyword } },
                    { "location.address.zipcode": { $regex: keyword } },
                    { "location.address.state": { $regex: keyword } },
                    { "location.address.street1": { $regex: keyword } }
                ]
        });
        res.status(200).json(theater)

    } catch (error) {
        res.status(404).json({ data: [] })
    }



}