const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200
}

module.exports = cors(corsOptions);
