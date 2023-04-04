import { Request, Response } from "express"
import CommentsModel from "../models/comments.model"



export const getComments = async (req: Request, res: Response) => {

    const page: number = Number(req.query.page) || 0;
    const commentsPerPage: number = Number(req.query.commentsPerPage) || 5;
    try {
        const comments = await CommentsModel.find({})
            .limit(commentsPerPage)
            .skip(commentsPerPage * page);
        res.status(200).json(comments)
    } catch (error) {
        res.status(404).json({ data: [] })
    }
}