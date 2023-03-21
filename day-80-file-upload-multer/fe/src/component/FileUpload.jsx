import { useEffect } from "react";
import { useState } from "react";


export default function FileUpload() {
    const URL = "http://localhost:8181/fileUpload"
    const FILE_URL = "http://http://localhost:8181/files"
    const [imageURLs, setImageURLs] = useState([])

    async function fetchFiles() {
        const FETCHED_DATA = await fetch(FILE_URL)

        const FETCHED_JSON = await FETCHED_DATA.json()
        setImageURLs(FETCHED_JSON.data)
    }

    useEffect(() => {
        fetchFiles()
    }, [])




    const handleFileUpload = async (event) => {
        event.preventDefault();
        console.log(event.target.image.files[0]);
        const data = new FormData()  //fe-s data damjuuldag object
        const files = event.target.image.files;
        data.append("image", files[0])





        // files.forEach((file, i) => {
        //     data.append(`file-${i}`, file, file.name)
        // })

        const options = {
            method: "POST",
            body: data,
        }

        const FETCHED_DATA = await fetch(URL, options);
        const FETCHED_JSON = await FETCHED_DATA.json();
        console.log(FETCHED_JSON);
        setImageURLs(FETCHED_JSON.data)

    }

    return (
        <div>
            <form
                method="post"
                encType="multipart/form-data"
                onSubmit={handleFileUpload}>
                <input type="file" name="image" multiple />
                <button type="submit">Submit</button>
                {imageURLs.map((img) => (<img src={img} alt="img" />
                ))}




            </form>
        </div>

    )
}