const skaicius = 7;                             // number
const tekstas = 'gfgfgg';                       // string
const tiesa = true;                           // boolean
const melas = false;                          // boolean
const pazymiai = [5, 10];                       // object (array)
const zodziai = ['Labas', 'rytas'];             // object (array)

console.log(skaicius, typeof skaicius);
console.log(tekstas, typeof tekstas);
console.log(tiesa, typeof tiesa);
console.log(melas, typeof melas);
console.log(pazymiai, typeof pazymiai);
console.log(zodziai, typeof zodziai);

/* zmogus = [vardas, pavarde, kiek metu, kelintu gimimo, ] */

const arrayZmogus = ['vardenis', 'pavardenis', 99, 1921, false, true, 2, 2, 1];

const zmogus = {
    vardas: 'Vardenis',
    pavarde: 'Pavardenis',
    amzius: 99,
    gimimoMetai: 1921,
    kojuSkaicius: 2,
    rankuSkaicius: 2,
    galvos: 1,
    turiKate: true,
    turiSuni: false,
    tevai: [
        {
            vardas: 'Onute',
            lytis: true
        },
        {
            vardas:'Petras',
            lytis: false
        }
    ]
}

console.log(zmogus);
console.log(zmogus['vardas']);
console.log(zmogus['pavarde']);

console.log(zmogus.pavarde);
console.log(zmogus.turiKate);
console.log(zmogus.amzius);
console.log(zmogus.gimimoMetai);

const auto = {
    marke: 'Audi',
    modelis: 'A6',
    spalva: 'pilka',
    dureliuSkaicius: 4,
    yraStoglangis: false
}

console.log(`Mano automobilis ${auto.marke} ${auto.modelis} yra ${auto.spalva} ir turi 
${auto.dureliuSkaicius} dureles.`);

zmogus.automobilis = auto;

console.log(zmogus);
console.log(zmogus.automobilis.marke);
console.log(zmogus.tevai[0].vardas);
console.log(zmogus.tevai[1].vardas);

const butas = {

    aukstas: 5,
    kambariuSkaicius: 2,
    kambariuDydziai: [
        {
            paskirtis: 'virtuve',
            dydis: `8 m2` 
        },
        {
            paskirtis: 'svetaine',
            dydis: `10 m2`
        },
    ],

}

console.log(butas);
console.log(butas.kambariuDydziai[0]);
console.log(butas.kambariuDydziai[1]);