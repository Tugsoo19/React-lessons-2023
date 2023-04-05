import { useEffect, useState } from "react";

interface IAddress {
    street1: string,
    city: string,
    state: string,
    zipcode: string
}

interface IGeo {
    type: {
        type: string,
        enum: ["Point"],
        required: true
    },
    coordinates: {
        type: [number, number],
        required: true
    }
}

interface ILocation {
    address: IAddress
    geo: IGeo
}

interface ITheater {
    theaterId: number,
    location: ILocation
}

export default function Theaters(): JSX.Element {

    const [theaters, setTheaters] = useState<ITheater[]>([])

    useEffect(() => {
        fetch('http://localhost:8181/theaters/list')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTheaters(data)
            })
    }, [])


    return (
        <div>
            <h1>Theaters list</h1>

            {theaters.map((theater, index) => (
                <div key={index}>
                    <ul>{theater.theaterId}</ul>
                </div>
            ))}


        </div>
    )
}