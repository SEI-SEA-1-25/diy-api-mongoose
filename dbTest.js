require('./models') // connect to db
const { findOneAndUpdate } = require('./models/Icecream')
const Icecream = require('./models/Icecream')

// CRUD ( create, read (index), read(show), update, delete )
async function createIcecream() {

    let Icecream = new Icecream({
        content: "Strawberry is my favorite flavor."
    })

    let savedIcecream = await Icecream.save()
    console.log(savedIcecream)
}

// read index
async function readAllIcecreams() {
    const allIcecreams = await Icecream.find({})
    console.log(allIcecreams)
}
// readAllIcecreams()

async function show() {
    const Icecream = await Icecream.findOne({
        content: 'this is annnooooother Icecream'
    })
    console.log(Icecream)
}
// show()

async function update() {
    const updatedIcecream = await Icecream.findOneAndUpdate({
        content: 'Wow, this is such a great Icecream.'
    }, {
        content: 'Wow, this Icecream sucks.'
    })
    console.log(updatedIcecream)
}

async function deleteIcecream() {
    const deletedIcecream = await Icecream.deleteOne({
        content: 'Wow, this Icecream sucks.'
    })
}
