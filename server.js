// Required Modules
const express = require('express')
const app = express()
const rowdy = require('rowdy-logger')
const rowdyResults = rowdy.begin(app)

// This sets up the DB connection
require('./models')

// Middleware
app.use(express.urlencoded({ extended: false }))

// Controllers
app.use('/racquets', require('./controllers/RacquetController.js'))


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  rowdyResults.print()
  console.log('Server is now listening at port:', PORT);
})