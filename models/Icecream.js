const mongoose = require('mongoose')

const IcecreamSchema = new mongoose.Schema({
    content: String,
    rating: Number
})

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    comments: [IcecreamSchema]
})

const Post = mongoose.model('Icecream', IcecreamSchema)

module.exports = { Post, Comment }