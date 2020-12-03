/*
foreach -> per kiekviena
tai ne funkcija o metodas, jis prisideda prie objekto
skiliaustuose aprasyti funkcija, ka daryti su kiekcienu skaiciu elementu
1 pavyzdi foreachas naudojamas su funkcija
2 pavyzdys rodo kad function naudojama foreacho viduje
3 pavyzdys rodo kaip galima uzrasysti forEacha su arrow function
*/

const skaiciai = [1, 2, 3, 4, 5, 6];

console.log(skaiciai);


for (i=0; i<skaiciai.length; i++) {
    const skaicius = skaiciai[i];
    console.log(skaicius * skaicius);
}

function kvadratu(x) {
    const rez = x * x;
    console.log(rez);
    return rez;
}
skaiciai.forEach(kvadratu);

skaiciai.forEach(function(p) {
    const kvd = p * p;
    console.log(kvd);
    return kvd;
})

skaiciai.forEach (p => console.log(p * p));
