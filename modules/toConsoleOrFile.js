const fs = require("fs");
const module_caesarEncode = require('./caesarEncode.js');
const {caesarEncode} = module_caesarEncode;


const toConsoleOrFile=(chunk, encoding, callback, shift, outputFile)=> {
    let str = chunk.toString();
    fs.open(outputFile, 'r', (err, fd) => {
        if (err) {
            if (err.code === 'ENOENT') {
                console.log('Output file: Does not exist or isn\'t .txt\n');
                console.log('Output text:');
                console.log(caesarEncode(str, shift));
                return;
            }

            throw err;
        }

        try {
            console.log('Output file: ok');
            const writeStream = fs.createWriteStream(outputFile,{flags:'a'}); // создаем поток
            writeStream.write(caesarEncode(str, shift)); // пишем
            writeStream.end();
        } finally {
            fs.close(fd, (err) => {
                if (err) throw err;
            });
        }
    });

};


module.exports.toConsoleOrFile = toConsoleOrFile;