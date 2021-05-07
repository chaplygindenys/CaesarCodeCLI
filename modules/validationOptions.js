const ACTIONS = ['encode', 'decode'];

const validationOptions=(shift, action)=>{
    if (! Number.isInteger(parseInt(shift, 10))) {
     return  `Action "${shift}" is not allowed. Use Integer`;
    }

    if (!ACTIONS.includes(action)){
    return ( `Action "${action}" is not allowed.
         Use one of these instead: ${ACTIONS.reduce((previous, current) => `${previous} or ${current}`)}`);
    }
    return 'ok';
}

module.exports.validationOptions =validationOptions;