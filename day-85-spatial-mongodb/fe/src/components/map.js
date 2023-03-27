import { useContext } from "react"
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from "react-leaflet"
import { NeighborhoodContext } from "../context/neighborhood.context";
import { RestaurantContext } from "../context/restaurants.context"

export default function Map() {
    const restaurants = useContext(RestaurantContext);
    // console.log(restaurants);
    const redOptions = { color: 'red' }
    const neighborhoods = useContext(NeighborhoodContext)
    console.log(neighborhoods[0].geometry.coordinates);

    return (
        <div>
            <h1>My Map</h1>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {restaurants && restaurants.map((element, index) => {
                    return (
                        <Marker key={index} position={[element.address.coord[1], element.address.coord[0]]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    )
                })}

                {neighborhoods && neighborhoods.map((element, index) => {
                    return (
                        <CircleMarker center={[element.geometry.coordinates[0][0][1], element.geometry.coordinates[0][0][0]]} pathOptions={redOptions} radius={20}>
                            <Popup>Popup in CircleMarker</Popup>
                        </CircleMarker>
                    )
                })}


            </MapContainer>
        </div>
    )
}