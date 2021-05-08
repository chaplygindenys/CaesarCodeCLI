const fs = require('fs')
const module_handInput = require('./handInput.js');
const {handInput} = module_handInput;

const module_encodeFile = require('./encodeFile.js');
const { encodeFile} = module_encodeFile;

const encodeDecodeText=(options)=>{
    const shift= options.shift;
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
            encodeFile(inputFile, fd, outputFile);
        } finally {
            fs.close(fd, (err) => {
                if (err) throw err;
            });
        }
    });
}

module.exports.encodeDecodeText = encodeDecodeText;