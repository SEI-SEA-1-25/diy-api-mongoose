const router = require('express').Router()
const GAProject = require('../models/GAProject')

// get all

router.get('/', async (req, res) => {
    const allProjects = await GAProject.find({})
    res.json(allProjects)
})

// get one

router.get('/:projectId', async (req, res) => {
    try {
        const project = await GAProject.findById(req.params.projectId)
        res.json(project)
    }
    catch (err) {
        console.log(err)
    }
})

//Create

router.post('/', async (req, res) => {
    const newProject = await GAProject.create({
        title: req.body.title,
        author: req.body.author,
        projectNumber: req.body.projectNumber,
        techStack: req.body.techStack,
        apiUsed: req.body.apiUsed,
        linesOfCode: req.body.linesOfCode
    })
    res.json(newProject)
})

//Update

router.put('/:projectId', async (req, res) => {
    try {
        const project = await GAProject.findByIdAndUpdate(req.params.projectId, {
            title: req.body.title,
            author: req.body.author,
            projectNumber: req.body.projectNumber,
            techStack: req.body.techStack,
            apiUsed: req.body.apiUsed,
            linesOfCode: req.body.linesOfCode
        })


        //console.log(project)
        res.json(project)

    } catch (err) {
        console.log(err)
    }


})

router.delete("/:projectId", async(req,res) => {
    const projectToDelete = await GAProject.findByIdAndDelete(req.params.projectId)
    res.json(projectToDelete)
})

module.exports = router;