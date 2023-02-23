const log = function(req,res,next) {
    console.log('\x1b[33m%s\x1b[0m', '\npath: ', req.originalUrl);
    console.log('\x1b[36m%s\x1b[0m', '\nbody:', req.body);
    console.log('\x1b[31m%s\x1b[0m', '\nparams :', req.params);
    console.log('\x1b[34m%s\x1b[0m',  '\nqueryParams:', req.query);
    next();
}

module.exports = log;
