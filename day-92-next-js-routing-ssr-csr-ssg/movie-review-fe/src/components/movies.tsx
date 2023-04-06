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
        <div >
            <h1>Movies list</h1>

            <div className="flex flex-wrap">
                {movies.map((movie, index) => (
                    <div key={index} className="mx-auto">
                        <div className="mx-auto">

                            {/* <ul>{movie.plot}</ul> */}
                            <img src={movie.poster} className="w-44 h-64 m-1 rounded-md" />
                            <div className="flex">
                                <img src="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/certified_fresh-notext.56a89734a59.svg" className="w-5 h-5" />
                                <a>{movie.tomatoes.viewer.meter}%</a>
                            </div>
                            <p className="text-sm w-44 break-words">{movie.title}</p>
                        </div>


                    </div>
                ))}
            </div>




        </div>
    )
}