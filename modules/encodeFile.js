const fs = require('fs');
const {Transform} = require('stream');
const module_caesarEncode = require('./caesarEncode.js');
const {caesarEncode} = module_caesarEncode;

const encodeFile = (inputFile, fileData, outputFile,shift) => {
    const encodeStream = new Transform({
        transform(chunk, encoding, callback) {
            let str = chunk.toString();
            this.push(caesarEncode(str, shift));
            callback();
        }
    });
    fs.createReadStream(
        inputFile
    ).pipe(encodeStream).pipe(fs.createWriteStream(outputFile));


};
module.exports.encodeFile = encodeFile;