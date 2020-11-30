const pajamos = [100, 200, 300, 100, 100, 0, 100];
let menuo = 0;
let pinigine = 0;

pinigine += pajamos[menuo++];
console.log(pinigine);

pinigine += pajamos[menuo++];
console.log(pinigine);

pinigine += pajamos[menuo++];
console.log(pinigine);

pinigine += pajamos[menuo++];
console.log(pinigine);

pinigine += pajamos[menuo++];
console.log(pinigine);

pinigine += pajamos[menuo++];
console.log(pinigine);

pinigine += pajamos[menuo++];
console.log(pinigine);

console.log('-------------------------------');

/**FOR ciklas  */

for (let i=0; i>= -5; i--) {
    console.log('Siuo metu i yra', i );
}


/* Suskaiciuoti pazymiu vidurki.
1) susumuoti pazymius
2) padalinti suma is pazymiu kiekio
*/

const marks = [10, 2, 8, 4, 6, 1, 7, 9];

let sum = 0;
const count = marks.length;

for (let i = 0; i < count; i++) {
    const mark = marks[i];
    sum += mark;

    console.log(i + ')', mark, '->', sum);
}

const average = sum / count;


console.log(`Pazymiu vidurkis yra ${average}.`);

console.log('---------------------------------------');

