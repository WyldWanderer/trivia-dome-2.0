const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const questionsRouter = require("./api/routes/questionRoutes")
const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use("/api/v1/questions", questionsRouter)
module.exports = app;