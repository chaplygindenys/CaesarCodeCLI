const fs = require('fs')
const module_handInput = require('./handInput.js');
const {handInput} = module_handInput;

const module_encodeFile = require('./encodeFile.js');
const { encodeFile} = module_encodeFile;

const encodeDecodeText=(options)=>{
   let shift= parseInt(options.shift , 10);
    if (options.action === 'decode') shift = shift * (-1) ;
    console.log(shift);
    const inputFile = options.input;
    const outputFile = options.output;


    fs.open(inputFile, 'r', (err, fd) => {
        if (err) {
            if (err.code === 'ENOENT') {
                handInput(shift);
                return;
            }

            throw err;
        }

        try {
            encodeFile(inputFile, fd, outputFile,shift);
        } finally {
            fs.close(fd, (err) => {
                if (err) throw err;
            });
        }
    });
}

module.exports.encodeDecodeText = encodeDecodeText;