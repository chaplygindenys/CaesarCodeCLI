const { Writable } = require('stream');
const module_caesarEncode = require('./caesarEncode.js');
const {caesarEncode} = module_caesarEncode;

const handInput=(shift)=> {

    const outStream = new Writable({
        write(chunk, encoding, callback) {
            let str = chunk.toString();
            console.log(caesarEncode(str, shift));
            callback();
        }
    });

    process.stdin.pipe(outStream);
};
module.exports.handInput = handInput;