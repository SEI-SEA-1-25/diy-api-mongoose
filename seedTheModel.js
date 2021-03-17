require('./models')
const GAProject = require('./models/GAProject')

async function SeedTheModel(){
    const P1 = await GAProject.create({
        title: 'Space Battle Laser in Space',
        auhor: 'Henry McDonald',
        projectNumber: 1,
        techStack: ['DOM','JS', 'Canvas'],
        apiUsed: [],
        linesOfCode: 1000
    })

    const P2 = await GAProject.create({
        title: 'Stonkhub',
        auhor: 'Henry McDonald',
        projectNumber: 2,
        techStack: ['EJS','Express','Sequelize'],
        apiUsed: ['IEX'],
        linesOfCode: 500
    })

    console.log(P1)
    console.log(P2)


}

console.log("seed initiated")
SeedTheModel()
console.log("the seed is strong")

