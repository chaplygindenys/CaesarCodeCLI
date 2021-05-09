const { Writable } = require('stream');
const  module_toConsoleOrFile = require('./toConsoleOrFile.js');
const {toConsoleOrFile} = module_toConsoleOrFile;

const handInput=(shift, outputFile)=> {
    const outStream = new Writable({
        write(chunk, encoding, callback) {
                   toConsoleOrFile(chunk, encoding, callback, shift, outputFile);
                   callback();
        }

    });
    process.stdin.pipe(outStream);
};
module.exports.handInput = handInput;