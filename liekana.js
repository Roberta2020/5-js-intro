/*
Suskaiciuoti kiek yra skaiciu be liekanos intervale?

*/

const nuo = 0;
const iki = 11;
const daliklis = 3;

let kiekis = 0;

for (let i = nuo; i <= iki; i++) {
    if (i % daliklis === 0) {
        kiekis++;
    }
}

console.log(`Skaiciu intervale tarp ${nuo} ir ${iki}, 
besidalijanciu be liekanos is ${daliklis} yra ${kiekis}
vienetai`);