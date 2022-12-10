// module
const express = require('express')
const app = express()

// routing
const home = require('./src/routes/home')

// app setting
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use('/', home) // use -> middleware

module.exports = app