require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var User = require('./models/user');
var isAuthorized = require('./middleware/isAuthorized');
var app = express();

var secret = process.env.MY_SECRET;

mongoose.connect('mongodb://localhost:27017/youtubesongsAPI');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('morgan')('dev'));

app.use('/api/users', expressJWT({ secret: secret }).unless({ method: 'POST' }));
app.use('/api/songs', expressJWT({ secret: secret }));
app.use(isAuthorized);
app.use('/api/users', require('./controllers/users'));
app.use('/api/songs', require('./controllers/songs'));

app.get('/', function(req, res) {
    res.send('Hello Backend!');
});

// for loggin in
app.post('/api/auth', function(req, res) {
    User.findOne({ email: req.body.email }, function(err, user) {
        if (err || !user) return res.send({ message: 'User not found' });
        user.authenticated(req.body.password, function(err, result) {
            if (err || !result) return res.send({ message: 'User not authenticated' });
            // in below line, user is turned to JSON and the UserScheme.set('toJSON') function is triggered
            var token = jwt.sign(JSON.stringify(user), secret);

            res.send({ user: user, jwt: token });
        });
    });
});

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
