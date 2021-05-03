const express = require('express')
const cors = require('cors')
const routes = require('./routes')


const app = express()

// Enable cors
app.use(cors())

// Body parser
// app.use(express.urlencoded())
app.use(express.json())

app.use(routes)

module.exports = app;