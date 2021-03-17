const express = require('express')
const { Mongoose } = require('mongoose')
const app = express()
const rowdy = require ('rowdy-logger')
require('./models')

const albumsController = require('./controllers/albumsController')



//Middleware
const rowdyResults = rowdy.begin(app)
app.use(express.urlencoded({extended: false}))



//controllers
app.use('/albums', albumsController)

app.get('/', async (req,res) =>{
    res.send("Welcome to the Zeppelin info page")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    rowdyResults.print()
    console.log("she up n'runnin on :", PORT,"! Get to it!")
})

