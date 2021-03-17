const router = require('express').Router()
const Book = require('../models/Book')


//GET(index)
router.get('/', async(req, res) => {
    try{
       const allBooks = await Book.find({})
       res.json(allBooks)
    } catch(err) {
        console.log(err);
    }
})

//GET(show)
router.get('/:id', async(req, res) => {
    try{
       const book = await Book.findById(req.params.id)
       if(book) {
        res.json(book)
    }
    } catch (err) {
        res.json({
            msg: 'could not find'
        })
    }
})


//POST
router.post('/', async(req, res) => {
    try{
      const newBook = await Book.create({
          title: req.params.title,
          author: req.params.author,
          pages: req.params.pages
      }) 
      res.json(newBook)
    } catch(err) {
        console.log(err);
    }
})


//PUT
router.put('/:id', async(req, res) => {
    try{
     const updatedBook = await Book.findByIdAndUpdate(req.params.id, {
        title: req.params.title,
        author: req.params.author,
        pages: req.params.pages
     })  
     res.json(updatedBook)
    } catch(err) {
        console.log(err);
    }
})


//DELETE
router.delete('/:id', async(req, res) => {
    try{
      const deletedBook = await Book.findByIdAndDelete(req.params.id) 
      res.json(deletedBook)
    } catch(err) {
        console.log(err);
    }
})


module.exports = router