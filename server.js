const express = require('express')
const app = express()
const methodOveride = require('method-override')
const rowdy = require('rowdy-logger')

// variables
const rowdyResults = rowdy.begin(app)

// TO SET UP THE DB CONNECTION
//require('./models')

// Middleware
app.use(express.urlencoded({extended: false}))
app.use(methodOveride('_method'))

// CONTROLLERS
app.use('/cities', require('./api/controllers/CityController'))

// ROUTES
app.get('/' , async (req, res) => {
    res.json('test')
})

// START THE SERVER
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    rowdyResults.print()
    console.log('Server is Listening at port', PORT)
})