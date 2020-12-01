/*
Isvesti duota zodi is kito galo
*/

const text = 'Labas!';

let backward = '';

console.log(text);
console.log(text.length);

for (let i = text.length - 1; i >= 0; i--) {
        const letter = text[i];
        backward += letter;
        console.log(i, letter, backward);
}

console.log(text, '<-->', backward);

