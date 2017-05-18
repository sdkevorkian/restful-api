module.exports = function(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send({ message: 'You need an auth token to view' });
    } else {
        next();
    }
};
