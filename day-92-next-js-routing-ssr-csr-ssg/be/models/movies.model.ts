import mongoose, { Date, Schema } from "mongoose";

interface IAwards {
    wins: number,
    nominations: number,
    text: string
}

interface IImdb {
    rating: number,
    votes: number,
    id: number
}

interface IViewer {
    rating: number,
    numReviews: number,
    meter: number
}

interface ITomatoes {
    viewer: IViewer,
    lastUpdated: Date
}

interface IMovies {
    plot: string,
    genres: [string],
    runtime: number,
    rated: string,
    cast: [string],
    num_mflix_comments: number,
    poster: string,
    title: string,
    fullplot: string,
    languages: [string],
    released: Date,
    directors: [string],
    writers: [string],
    awards: IAwards,
    lastupdated: Date,
    year: number,
    imdb: IImdb,
    countries: [string],
    type: string,
    tomatoes: ITomatoes
}

const MoviesSchema: Schema = new Schema({})

const MoviesModel = mongoose.model<IMovies>("Movies", MoviesSchema)

export default MoviesModel

