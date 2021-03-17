const City = require('./api/models/City')
require('./api/models')

async function createPost() {
    let city = new City({
        name: 'Arlington',
        state: 'Virginia',
        zipcode: 22300
    })
    // Save the City object in the database
    let savedCity = await city.save()
    console.log(savedCity)

}


createPost()
