const express = require('express')
const cors = require('cors')
const multer = require("multer")

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
app.get('/', (request, response) => {
    response.send('<h1>Hello Day-80 FileUpload Multer</h1>')
})

app.post('/fileUpload', upload.single("image"), (request, response, next) => {
    console.log(request.file);
    response.json({
        data: []
    })
})

app.listen(PORT, () => {
    console.log(`Express Application is running on http://localhost:${PORT}`);
})