const winston = require('./logger');

const errorHandler = function (err, req, resp, next) {
    if (resp.headersSent) {
        return next.err;
    }
    winston.error(err.name, {'path':req.path, 'body':req.body, 'params':req.params, 'query':req.query});
    resp.status(500).send('Internal Server Error');
}
module.exports = errorHandler;
