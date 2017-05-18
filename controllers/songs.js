var express = require('express');
var Song = require('../models/song');
var router = express.Router();

// send all songs
router.get('/', function(req, res) {
    Song.find(function(err, songs) {
        if (err) return res.send({ message: 'an error occured when finding songs' });
        res.send(songs);
    });
});

// make a new song
router.post('/', function(req, res) {
    var song = new Song(req.body);
    song.save(function(err) {
        if (err) return res.send({ message: 'an error occured when creating a song' });
        res.send(song);
    });
});

//display specific song
router.get('/:id', function(req, res) {
    Song.findById(req.params.id, function(err, song) {
        if (err) return res.send({ message: "No song found" });
        res.send(song);
    });
});

// edit song
router.put('/:id', function(req, res) {
    Song.findByIdAndUpdate(req.params.id, req.body, function(err, song) {
        if (err) return res.send({ message: 'no song found' });
        res.send('prev song:' + song);

    });
});

router.delete('/:id', function(req, res) {
    Song.remove({ _id: req.params.id }, function(err) {
        if (err) return res.send({ message: 'no song found' });
        res.send({ message: 'song deleted' });
    });
});

module.exports = router;
