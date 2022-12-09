// module
const express = require('express')
const app = express()

// routing
const home = require('./routes/home')

// app setting
app.set('views', './views')
app.set('view engine', 'ejs')

app.use('/', home) // use -> middleware

module.exports = app