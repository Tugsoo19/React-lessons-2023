import AlertButton from "./AlertFunction";

export default function Toolbar() {
return (
    <div>
        <AlertButton message="Playing!">Play Movie</AlertButton>
        <AlertButton message="Uploading!">Upload Image</AlertButton>
        <AlertButton message="Dowloading!">Dowload Image</AlertButton>
    </div>
);
}