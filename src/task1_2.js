const fs = require('fs');
const csv = require('csvtojson');

const path = require('../constants/constants');

const csvPath = path.csv;
const textOutputPath = path.textOutput;
const csvTextContent = fs.createReadStream(csvPath);

csvTextContent
    .on('error', (error) => console.log(error.message))
    .pipe(csv())
    .pipe(fs.createWriteStream(textOutputPath))

