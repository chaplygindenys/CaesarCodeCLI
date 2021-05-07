const { Command } = require('commander');
const module_validationOptions = require('./modules/validationOptions.js');
const program = new Command();
const {validationOptions} = module_validationOptions;
let shift = 0;
program
    .version('0.0.1')
    .description('CaesarCode');
program
    .option('-s, --shift <type>', 'a shift')
    .option('-i, --input <type>', 'an input file')
    .option('-a, --action <type>', 'an action encode/decode')
    .option('-o, --output <type>', 'an output file');


program.parse(process.argv);
// console.log({process});
const options = program.opts();
console.log(options);
const validationError = validationOptions(options.shift, options.action);
if (validationError!=='ok'){
    console.error(validationError);
    process.exit(1);
}



