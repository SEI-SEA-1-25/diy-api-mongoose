require('./models')
const State = require('./models/State')

async function createState () {
    const newState = await State.create({
        name: 'Kansas',
        capital: 'Topeka',
        population: 2.913

    })
    console.log(newState)
}

// createState()