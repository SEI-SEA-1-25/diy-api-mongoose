//Required Modules
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const rowdy = require('rowdy-logger')
//this sets up the DB connection
require('./models')

//variables 
const rowdyResults = rowdy.begin(app)

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

// Controllers
app.use('/colors', require('./controllers/colorsController'))

// Routes



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    rowdyResults.print()
    console.log('server is now listening at port:', PORT)
})