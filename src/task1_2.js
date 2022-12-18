const {createReadStream, createWriteStream} = require('fs');
const csv = require('csvtojson');
const path = require('../constants/constants');

const csvPath = path.csv;
const textOutputPath = path.textOutput;
const csvTextContent = createReadStream(csvPath);

csvTextContent
    .pipe(csv())
    .pipe(createWriteStream(textOutputPath))
    .on('error', (error) => console.log(error.message))
    // .pipe(csv())
    // .on('data', (data) =>  {fs.createWriteStream(textOutputPath).write(data)})
    // .on('error', (error) => console.log(error.message));

