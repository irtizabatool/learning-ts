type Combie = number | string;

function combine(
    input1: Combie,
    input2: Combie, 
    resultConvert: 'as-number' | 'as-text'
){
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConvert === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    
    return result; 
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedNames = combine('30', '26','as-number');
console.log(combinedNames);

const names = combine('Phoebe', 'Buffay','as-text');
console.log(names);