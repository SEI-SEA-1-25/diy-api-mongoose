// Required Modules
const express = require('express')
const app = express()
const rowdy = require('rowdy-logger')
const rowdyResults = rowdy.begin(app)

// Set up DB connection
require('./models')

// Middleware
app.use(express.urlencoded({ extended: false }))

// Controllers
app.use('/shows', require('./controllers/ShowController'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    rowdyResults.print()
    console.log('Server is now listening at port:', PORT)
})