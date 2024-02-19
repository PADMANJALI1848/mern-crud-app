require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const deviceRoute = require('./routes/device.routes.js')
const Device = require('./models/device.model.js')
const app = express()

//middleware
app.use(express.json())

app.use('/api/devices',deviceRoute)

//mongodb connection
mongoose.connect(process.env.MONGO_URI)
.then( () => {
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
});
}).catch( () => {
    console.log('Connection to DB failed !!');
})


