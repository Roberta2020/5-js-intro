/**
 while () {}

 procedurros atliekamos 'tol kol' tenkinama kazkokia salyga ar salygos.

 principas kaip ir for

 kintamasis (siuo atveju - m) yra incijuojamas tik for bloke, isorej nnematomas.
 while kintamasis iniciajuojamas isoreje
 taciau galima for'e inicijuoti kintamaji taip pat isoreje
 ESMINIS skirtumas tarp for ir while, kad for bloke turi buti kabliataskis ;
 i++; m++ - iteratoriai

 */

 let i = 0;

 while(i < 5) {
     console.log('labas');
     i++;
 }

 for (let m=0; m < 5; m++) {
     console.log('rytas');
 }

 const pazymiai = [5, 10, 8, 7];
 let sum = 0;
 let pazymysIndex = 0;
 const pazymiuKiekis = pazymiai.length;

 while(pazymysIndex < pazymiuKiekis) {
     sum += pazymiai[pazymysIndex];
     pazymysIndex++;
 }
 console.log(sum);

 let sumfor = 0;
 for (let i = 0; i < pazymiai.length; i++) {
     sumfor += pazymiai[i];
 }

 console.log(sumfor);

 console.log('-----------------------------------------');

 /*Sumuoti atsitiktini skaiciu tol kol gausim suma 10 */
 
let randomSum = 0;
let randCount = 0;

while(randomSum < 10) {
    randCount++;
    randomSum += Math.random();
    console.log(randCount, '-', randomSum);
}

let randomSumFor = 0;
let randCountFor = 0;

for(; randomSumFor < 10; randomSumFor += Math.random()) {
    randCountFor++;
}

console.log(randCountFor, '-', randomSumFor);