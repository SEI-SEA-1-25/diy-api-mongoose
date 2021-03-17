require('./models')
const Album = require('./models/Album')
const Song = require('./models/Song')


//Create some albums 
async function createAlbum() {
    const newAlbum = await new Album({
        title: 'Led Zeppelin III',
        releaseYear: 1970,
    })
    newAlbum.save();
    console.log(newAlbum)
}

// createAlbum();

//Create an album with some songs

async function createAlbumWithSongs(){
    const songRemainsSame  = await Song.create({
        title:'The Song Remains the Same',
        songLength: "5min 29sec"
    })
    const theRainSong  = await Song.create({
        title:'The Rain Song',
        songLength: "7min 39sec"
    })
    const overTheHills  = await Song.create({
        title:'Over the Hills and Far Away',
        songLength: "4min 51sec"
    })
    const album = await Album.create({
        title: "Houses of the Holy",
        releaseYear: 1973,
        songs: [songRemainsSame, theRainSong, overTheHills]
    })

    console.log(album)
}

// createAlbumWithSongs();

