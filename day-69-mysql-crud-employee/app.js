console.log('Day-69');

import express from 'express';
import admin from './routes/admin.js';
// import emp_router from './routes/api.js';
import api_router from './routes/api.js';
import cors from 'cors'



const app = express();
const PORT = 8181;
app.use(express.json());
app.use(cors())

app.use("/admin", admin);
app.use("/api", api_router);

app.get('/', (request, response) => {
    response.send("<h1 style='text-align: center; background-color: orange'>Day-69</h1>")
})




app.listen(PORT, () => {
    console.log(`Express App is running on http://localhost:${PORT}`);
})