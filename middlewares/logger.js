const winston = require('winston');

const logConfiguration = {
    transports: [
        new winston.transports.Console({
            handleExceptions: true,

            format: winston.format.combine(
                winston.format.label({ label: 'Winston Error Handler...' }),
                winston.format.timestamp(), winston.format.prettyPrint()
            )
        })
    ],
    exitOnError: false
}

const logger = winston.createLogger(logConfiguration)

module.exports = logger;
