const fs = require('fs')
const module_handInput = require('./handInput.js');
const {handInput} = module_handInput;

const module_encodeFile = require('./encodeFile.js');
const { encodeFile} = module_encodeFile;

const encodeDecodeText=(options)=>{
    let inputFile = "/";
    let outputFile = "/";
   let shift= parseInt(options.shift , 10);
    if (options.action === 'decode') shift = shift * (-1) ;

    if(options.input !== undefined){
         inputFile = options.input}else{inputFile = "./undefined"}

    if(options.output !== undefined){
        outputFile = options.output}else{ outputFile = "./undefined"}


    fs.open(inputFile, 'r', (err, fd) =>{
        if (err) {
            if (err.code === 'ENOENT') {
                console.log('Input file: Does not exist or isn\'t .txt');
                console.log('Input some-text:');
                handInput(shift, outputFile);
                return;
            }

            throw err;
        }

        try {
            console.log('Input file: ok');
            encodeFile(inputFile, fd, outputFile,shift);
        } finally {
            fs.close(fd, (err) => {
                if (err) throw err;
            });
        }
    });
}

module.exports.encodeDecodeText = encodeDecodeText;