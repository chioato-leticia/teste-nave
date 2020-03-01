let args = process.argv.splice(2);

function concatenateString (...array) {
    array.map(n => console.log(n));
}

concatenateString (args);