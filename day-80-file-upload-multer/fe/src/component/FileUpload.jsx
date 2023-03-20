

export default function FileUpload() {
    const URL = "http://localhost:8181/fileUpload"
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


    }

    return (
        <div>
            <form
                method="post"
                encType="multipart/form-data"
                onSubmit={handleFileUpload}>
                <input type="file" name="image" multiple />
                <button type="submit">Submit</button>

            </form>
        </div>

    )
}