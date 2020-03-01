let first = process.argv[2];
let second = process.argv[3];

if (typeof first === 'undefined' || typeof second === 'undefined') {
    console.log('Por favor, informe uma palavra válida.');
    return false;
}

function biggerString(first, second) {
    let firstLength = first.length;
    let secondLength = second.length;

    if (firstLength > secondLength) {
        return first;
    } else if (secondLength > firstLength) {
        return second;
    } else {
        return 'Mesmo tamanho';
    }
}

console.log(biggerString(first, second));
