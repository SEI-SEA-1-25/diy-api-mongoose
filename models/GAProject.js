const mongoose = require('mongoose')

const GAProjectsSchema = new mongoose.Schema({
    title: String,
    author: String,
    projectNumber: Number,
    techStack: Array,
    apiUsed: Array,
    linesOfCode: Number
})

const GAProject = mongoose.model('GAProject', GAProjectsSchema)

module.exports = GAProject;