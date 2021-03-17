// required Modules
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const rowdy = require('rowdy-logger')

// variables
const rowdyResults = rowdy.begin(app)

// set up the DB connection
require('./models')

// middleware
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

// controllers
app.use('/posts', require('./controllers/PostController'))

// routes

// server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    rowdyResults.print()
    console.log('Server is now listening at port:', PORT)
})