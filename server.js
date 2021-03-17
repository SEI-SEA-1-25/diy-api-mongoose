const express = require('express')
const app = express()
const rowdy = require('rowdy-logger')
const rowdyResults = rowdy.begin(app)

// This sets up the DB connection
require('./models')

app.use(express.urlencoded({ extended: false }))


app.use('/vehicles', require('./controllers/VehicleController.js'))



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    rowdyResults.print()
})