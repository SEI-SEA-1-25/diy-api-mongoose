const express = require('express')
const app = express()
const rowdy = require('rowdy-logger')
const rowdyResults = rowdy.begin(app)

require('./models')

app.use(express.urlencoded({ extended: false}))


app.use('/states', require('./controllers/stateController'))


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    rowdyResults.print()
    console.log('server is now listening at port:', PORT)
})

