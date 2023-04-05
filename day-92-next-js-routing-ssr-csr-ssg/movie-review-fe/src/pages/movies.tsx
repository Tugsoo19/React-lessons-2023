import { useEffect, useState } from "react";

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

export default function Movies(): JSX.Element {

    const [movies, setMovies] = useState<IMovies[]>([])

    useEffect(() => {
        fetch('http://localhost:8181/movies/list')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data)
            })
    }, [])


    return (
        <div>
            <h1>Movies list</h1>

            {movies.map((movie, index) => (
                <div key={index}>
                    <a>{movie.title}</a>
                    <ul>{movie.plot}</ul>
                    <img src={movie.poster} />
                </div>
            ))}


        </div>
    )
}