const { Command } = require('commander');
const module_validationOptions = require('./modules/validationOptions.js');
const module_encodeDecodeText = require('./modules/encodeDecodeText.js');
const program = new Command();
const {encodeDecodeText} = module_encodeDecodeText;
const {validationOptions} = module_validationOptions;
program
    .version('0.0.1')
    .description('CaesarCode');
program
    .option('-s, --shift <type>', 'a shift')
    .option('-i, --input <type>', 'an input file')
    .option('-a, --action <type>', 'an action encode/decode')
    .option('-o, --output <type>', 'an output file');


program.parse(process.argv);
const options = program.opts();
const validationError = validationOptions(options.shift, options.action);
if (validationError!=='ok'){
    console.error(validationError);
    process.exit(1);
}else{
    console.log(validationError);
    encodeDecodeText(options)}



