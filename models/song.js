var mongoose = require('mongoose');

var SongSchema = mongoose.Schema({
    title: String,
    artist: String,
    genre: String,
    youTubeUrl: String,
    duration: String,
});

module.exports = mongoose.model('Song', SongSchema);
