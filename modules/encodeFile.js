const fs = require('fs');
const { Writable } = require('stream');
const  module_toConsoleOrFile = require('./toConsoleOrFile.js');
const {toConsoleOrFile} = module_toConsoleOrFile;

const encodeFile = (inputFile, fileData, outputFile,shift) => {

    const outStream = new Writable({
        write(chunk, encoding, callback) {
            toConsoleOrFile(chunk, encoding, callback, shift, outputFile);
            callback();
        }

    });
    fs.createReadStream(inputFile).pipe(outStream);

 console.log('file');
};
module.exports.encodeFile = encodeFile;