function pickLetters (text, step) {
    // input validation
    if (typeof text !== 'string') {
        return 'ERROR: pirmas parametras turi buti tekstas.'
    }
    if (text === '') {
        return 'ERROR: pirmas parametras negali buti tuscias tekstas.'
    }

    if (typeof step !== 'number') {
        return 'ERROR: antras parametras turi buti skaiciaus tipo.'
    }
    if (typeof step > text.length) {
        return 'ERROR: nurodytas zingsnis negali virsyti teksto ilgio.'
    }

    if (typeof step === 0) {
        return 'ERROR: nurodytas zingsnis negali buti 0 (nulis).'
    }
    // logic
    let word = '';

    for (let i=0; i<text.length; i++) {
        const letter = text[i];
        word += letter;
    }

    //post logic validation
    if (word === '') {
        return 'ERROR: nutiko kazkas labai keisto, nes si klaida turejo buti neimanoma gauti.'
    }
    

    //return result
    return word;
}



console.log( pickLetters(1561, 2 ));

console.log( pickLetters('abcdefg', 2), '->', 'bdf');
console.log( pickLetters('abcdefghijkl', 3 ), '->', 'cfil');


console.log( pickLetters('abc', 0 ));
console.log( pickLetters('abc', 4 ));

/** 
 * STEP 2  KAS 2
0 "a" 2
1 "b" 2   1
2 "c" 2
3 "d" 2   3
4 "e" 2
5 "f" 2   5


*STEP 3    KAS 3
0 "a" 3
1 "b" 3
2 "c" 3   2
3 "d" 3
4 "e" 3
5 "f" 3   5
6 "g" 3
7 "h" 3
8 "i" 3   8
9 "j" 3
10 "k" 3
11 "l" 3  11


KAIP ISRANKIOTI RAIDS IS KITO GALO
raides imamos is kito teksto galo

console.log( pickLetters('abcdefg', -2), '->', 'fdb');
console.log( pickLetters('abcdefghijkl', -3 ), '->', 'jgda');


*/