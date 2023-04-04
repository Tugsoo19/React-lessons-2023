import { Router } from "express";
import { getComments } from "../controllers/comments.controller";


const commentsRouter = Router();

commentsRouter.get('/list', getComments)

export default commentsRouter