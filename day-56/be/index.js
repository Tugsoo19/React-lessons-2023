console.log('Day-56 -- REST API');

const express = require('express')
const fs = require('fs')
const cors = require('cors');
const { response } = require('express');
const exp = require('constants');

const app = express()
const PORT = 8080

app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
    response.send('<h1>Express REST API is running</h1>')
})

app.get('/timers', (request, response) => {

    fs.readFile('./data/data.json', 'utf-8', (readError, readData) => {
        if (readError) {
            response.json({
                status: 'file is not found',
                data: []
            })

        }

        const timerData = JSON.parse(readData)
        console.log(timerData);
        console.log(typeof timerData);

        response.json({
            status: 'success',
            data: timerData,
        })

    })
})

app.delete('/timers', (request, response) => {
    const body = request.body;
    fs.readFile('./data/data.json', 'utf-8', (readError, readData) => {
        if (readError) {
            response.json({
                status: 'file read error',
                data: []
            })
        }
        const readObject = JSON.parse(readData)
        const filteredObjects = readObject.filter((e) => e.id !== body.id)

        fs.writeFile(
            './data/data.json',
            JSON.stringify(filteredObjects),
            (writeError) => {
                if (writeError) {
                    response.json({
                        status: 'write file error',
                        data: []
                    })
                }
                response.json({
                    status: 'success',
                    data: filteredObjects,
                })
            }
        )
    })
})

app.post('/timers', (request, response) => {
    const body = request.body;
    const newData = {
        title: body.title,
        project: body.project,
        id: body.id,
        elapsed: body.elapsed,
    }
    console.log(newData);

    fs.readFile("./data/data.json", 'utf-8', (readError, readData) => {
        if (readError) {
            response.json({
                status: "read file error",
                data: [],
            })
        }

        const dataObject = JSON.parse(readData)
        dataObject.push(newData)

        fs.writeFile(
            "./data/data.json",
            JSON.stringify(dataObject),
            (writeError) => {
                if (writeError) {
                    response.json({
                        status: "Error during file write",
                        data: [],
                    })
                }
                response.json({
                    status: "success",
                    data: dataObject,
                })
            }
        )
    })
})

app.put('/timers', (request, response) => {
    const body = request.body;
    console.log(body.timerId);
    fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
        const savedData = JSON.parse(readData);
        if (readError) {
            response.json({
                status: "read file error",
                data: [],
            });
        }
        const updatedData = savedData.map((d) => {
            if (d.id === body.id) {
                (d.title = body.title), (d.project = body.project)
            }
            return d;
        });
        fs.writeFile(
            "./data/data.json",
            JSON.stringify(updatedData),
            (writeError) => {
                if (writeError) {
                    response.json({
                        status: "Error during file write",
                        data: [],
                    })
                }
                response.json({
                    status: "success",
                    data: updatedData,
                })
            }
        )
    })

})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})