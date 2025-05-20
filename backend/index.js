const express = require("express")
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')


const app = express()

app.use(cors())
app.use(express.json())


//routes
app.use('/api/users', require('./routes/UserRoutes'))



//mongo db connection
mongoose.connect(process.env.MONGODB)
const dbconfig = mongoose.connection;

dbconfig.on("connected", () => {
    console.log("Mongo DB connected successfully");
})

dbconfig.on("error", () => {
    console.log("Mongo DB Not conntect, check URL");
})


//server
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`server start on the port ${port}`);
})