let dictionary = {4: 'a', 3: 'e', 1: 'i', 5: 's'};

let phrase = 'T35t3 d3 35t4g1o';

for (let key in dictionary) {
    phrase = phrase.replace(new RegExp(key, "g"), dictionary[key]);
}

console.log(phrase);