const express = require('express')
const app = express()
const methodOverride = require('method-override')
const rowdy = require('rowdy-logger')
const rowdyResults = rowdy.begin(app)

require('./models')

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.use('/books', require('./controllers/BookController.js'))


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    rowdyResults.print()
    console.log('server is listening for port', PORT)
})
