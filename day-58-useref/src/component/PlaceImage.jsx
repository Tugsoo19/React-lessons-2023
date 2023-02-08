import { useContext } from "react";
import { getImageUrl } from "../data/utils";
import { ImageContext } from "../context/ImageContext";

export default function PlaceImage({ place }) {
    const [isLarge, setIsLarge, imageSize] = useContext(ImageContext)

    return (
        <img
            src={getImageUrl(place)}
            alt={place.name}
            width={imageSize}
            height={imageSize}
        />
    )
}