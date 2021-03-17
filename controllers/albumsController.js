const Album = require('../models/Album')
const Song = require('../models/Song')
const router = require('express').Router()



//GET index all albums
router.get('/', async (req, res) => {
    try {
        const albums = await Album.find({})
        res.json(albums)
    } catch (error) {
        console.log(error)
    }
})

// GET show one album

router.get('/:albumId', async (req, res) => {
    try {
        const findAlbum = await Album.findById(req.params.albumId)
        console.log(findAlbum)
        res.json(findAlbum)
    } catch (error) {
        console.log(error)
    }
})


// POST create an album

router.post('/', async (req, res)=>{
    try {
        const newAlbum = await new Album({
            title: req.body.title,
            releaseYear: req.body.releaseYear
        })
        await newAlbum.save();
        res.json(newAlbum)
    } catch (error) {
        console.log(error)
    }
})


// GET all songs in an album 

router.get('/:albumId/songs', async (req, res)=>{
    try {
        let albumId = req.params.albumId
        const album = await Album.findById(albumId).populate('songs')
    
        res.json(album)
        console.log(album)
    } catch (error) {
        console.log(error)
    }
})

// Put songs into an album

router.post('/:albumId/songs', async (req, res)=>{
    try {
        const song = new Song({
            title: req.body.title,
            songLength: req.body.songLength
        })
        song.save()
        const findAlbum = await Album.findById(req.params.albumId)
        findAlbum.songs.push(song)
        await findAlbum.save()

        res.json(findAlbum)
        console.log(findAlbum)
    } catch (error) {
        console.log(error)
    }
})

//PUT update an album

router.put('/:albumId', async (req, res) =>{
    try {
     const updatedAlbum = await Album.findByIdAndUpdate({
         _id: req.params.albumId, 
         { title: req.body.title },
     })   

    } catch (error) {
        console.log(error)
    }
})

// delete an album 

router.delete('/:albumId', async (req, res) =>{
    try {
        
    } catch (error) {
        console.log(error)
    }
})





module.exports = router