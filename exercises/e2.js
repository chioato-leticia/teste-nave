let string1 = process.argv[2];
let string2 = process.argv[3];

if (typeof first === 'undefined' || typeof second === 'undefined') {
    console.log('Por favor, informe uma palavra válida.');
    return false;
  }

function callbackExample(a, b) {
    console.log (`${a} ${b}`);
}

function concatenateString(callback, a, b) {
    return callback(a,b);
}

concatenateString(callbackExample, string1, string2);