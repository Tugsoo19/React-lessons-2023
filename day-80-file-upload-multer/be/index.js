const express = require('express')
const cors = require('cors')
const multer = require("multer")
const fs = require('fs')
const { log } = require('console')
const { response } = require('express')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
})

const app = express()
const PORT = 8181
const upload = multer({ storage: storage })

app.use(express.json())
app.use(cors())
app.use('/uploads', express.static("uploads"));  // URL-r tuhain file-aa nereer ni avah


app.get("/files", async (request, response) => {
    const testFolder = "./uploads/"
    const imgs = [];

    fs.readdirSync(testFolder).forEach((file) => {

        console.log(file);
        const imgURL = `http://localhost:8181/uploads/${file}`
        imgs.push(imgURL)
    });

    response.status(200).json({
        data: imgs,
    })
})

app.get('/', (request, response) => {
    response.send('<h1>Hello Day-80 FileUpload Multer</h1>')
})

app.post('/fileUpload', upload.single("image"), (request, response, next) => {
    // console.log(request.file);
    const imgs = []
    fs.readdirSync("./uploads").forEach((file) => {
        console.log(file);
        const fileURL = `http://localhost:8181/uploads${file}`
        imgs.push(fileURL)
    })
    response.json({
        data: imgs,
    })


})



app.listen(PORT, () => {
    console.log(`Express Application is running on http://localhost:${PORT}`);
})