/* Kintamuju inicijavimas
1. (skaiciaus tipo kintamieji) */
const atlyginimas = 700;
console.log(atlyginimas);
const svoris = 73;
console.log(svoris);
const obuoliuKiekisPintineje = 8;
console.log(obuoliuKiekisPintineje);

/* 2. (teksto tipo reiksmes) */
const metuLaikas = "pavasaris";
console.log(metuLaikas);
const filmas = "Titanikas";
console.log(filmas);
const gele = "rožė";
console.log(gele);

/* 3. (saraso tipas su skaiciais) */
const reitingas = [3, 6, 9, 15, 16];
console.log(reitingas);
const batuDydis = [36, 37, 38, 39, 40];
console.log(batuDydis);
const balsai = [125, 14, 55, 94, 101];
console.log(balsai);

/* 4. (saraso tipas su zodziais) */
const draugai = ["Laura", "Vilius", "Tomas", "Ugnė", "Paulius"];
console.log(draugai);
const gyvunai = ["Žirafa", "Liūtas", "Dramblys", "Zebras", "Begemotas"];
console.log(gyvunai);
const pirkiniai = ["Kiaušiniai", "Pienas", "Duona", "Sūris", "Miltai"];
console.log(pirkiniai);

/* Veiksmai su kintamaisiais 
1. (susumuoti) */
const suma = atlyginimas + svoris + obuoliuKiekisPintineje;
console.log(suma);
/* 2. (sujungti zodzius su tarpais) */
const tekstas = metuLaikas + " " + filmas + " " + gele;
console.log(tekstas);
/* 3. (apskaiciuoti saraso verte) */
const reitingoSkaicius = reitingas[0] - reitingas[1] + reitingas[2] - reitingas[3] + reitingas[4];
console.log(reitingoSkaicius); 
const batuDydioSkaicius = batuDydis[0] - batuDydis[1] + batuDydis[2] - batuDydis[3] + batuDydis[4];
console.log(batuDydioSkaicius);
const balsuSkaicius = balsai[0] - balsai[1] + balsai[2] - balsai[3] + balsai[4];
console.log(balsuSkaicius);
/* 4. (sujungti saraso vertes) */
const drauguSarasas = draugai[4] + ", " + draugai[3] + ", " + draugai[2] + ", " + draugai[1] + ", " + draugai[0];
console.log(drauguSarasas);
const gyvunuSarasas = gyvunai[4] + ", " + gyvunai[3] + ", " + gyvunai[2] + ", " + gyvunai[1] + ", " + gyvunai[0];
console.log(gyvunuSarasas);
const pirkiniuSarasas = pirkiniai[4] + ", " + pirkiniai[3] + ", " + pirkiniai[2] + ", " + pirkiniai[1] + ", " + pirkiniai[0];
console.log(pirkiniuSarasas);

/* Kintamuju palyginimas
1.a. (kuris didesnis) */
if(atlyginimas > svoris) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
if(atlyginimas > obuoliuKiekisPintineje) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
if(svoris > obuoliuKiekisPintineje) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
/* 1.b. (kuris mazesnis) */
if(atlyginimas < svoris) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
if(atlyginimas < obuoliuKiekisPintineje) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
if(svoris < obuoliuKiekisPintineje) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
/* 1.c. (ar jie lygus) */
if(atlyginimas === svoris) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
if(atlyginimas === obuoliuKiekisPintineje) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
if(svoris === obuoliuKiekisPintineje) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
/* 1.d. (ar jie nelygus) */
if(atlyginimas !== svoris) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
if(atlyginimas !== obuoliuKiekisPintineje) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
if(svoris !== obuoliuKiekisPintineje) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
/* 1.e. (kuri didesnis arba lygus) */
if(atlyginimas >= svoris) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
if(atlyginimas >= obuoliuKiekisPintineje) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
if(svoris >= obuoliuKiekisPintineje) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
/* 1.f. (kuris mazesnis arba lygus) */
if(atlyginimas <= svoris) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
if(atlyginimas <= obuoliuKiekisPintineje) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
if(svoris <= obuoliuKiekisPintineje) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
/* 2. (isvesti teksto kintamuju ilgius) */
const metuLaikasilgis = metuLaikas.length;
console.log(metuLaikasilgis);

const filmasIlgis = filmas.length;
console.log(filmasIlgis);

const geleIlgis = gele.length;
console.log(geleIlgis);
/* 3. a. (kuris ilgis didedsnis) */
if(metuLaikasilgis > filmasIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
if(metuLaikasilgis > geleIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
if(filmasIlgis > geleIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
/* 3. b. (kuris ilgis mazesnis) */
if(metuLaikasilgis < filmasIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
if(metuLaikasilgis < geleIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
if(filmasIlgis < geleIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
/* 3. c. (ar ilgiai lygus) */
if(metuLaikasilgis === filmasIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
if(metuLaikasilgis === geleIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
if(filmasIlgis === geleIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
/* 3. d. (ar ilgiai nelygus) */
if(metuLaikasilgis !== filmasIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
if(metuLaikasilgis !== geleIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
if(filmasIlgis !== geleIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
/* 3. e. (kuris didesnis arba lygus) */
if(metuLaikasilgis >= filmasIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
if(metuLaikasilgis >= geleIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
if(filmasIlgis >= geleIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
/* 3. f. (kuris mazesnis arba lygus) */
if(metuLaikasilgis <= filmasIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
if(metuLaikasilgis <= geleIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
if(filmasIlgis <= geleIlgis) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
/* 4. (isvesti saraso tipo kintamuju ilgius)*/ 
let reitingoIlgis = reitingas.length;
let batuDydzioIlgis = batuDydis.length;
let balsuIlgis = balsai.length;
console.log(reitingoIlgis);
console.log(batuDydzioIlgis);
console.log(balsuIlgis);

let drauguIlgis = draugai.length;
let gyvunuIlgis = gyvunai.length;
let pirkiniuIlgis = pirkiniai.length;
console.log(drauguIlgis);
console.log(gyvunuIlgis);
console.log(pirkiniuIlgis);
/* 5.a. (tarpusavy palyginti saraso tipo kintamuju ilgius)(kuris didesnis) */
if(reitingoIlgis > batuDydzioIlgis) {
    console.log(`Didesnis reitingo sarasas.`);
}else {
    console.log(`Didesnis batu dydziu sarasas.`);
} 
if(batuDydzioIlgis > balsuIlgis) {
    console.log(`Didesnis batu dydziu sarasas.`);
}else {
    console.log(`Didesnis balsu sarasas.`);
}
if(balsuIlgis > reitingoIlgis) {
    console.log(`Didesnis balsu sarasas.`);
}else {
    console.log(`Didesnis reitingo sarasas.`);
}
/* 5.b. (kuris mazesnis) */
if(reitingoIlgis < batuDydzioIlgis) {
    console.log(`Mazesnis reitingo sarasas.`);
}else {
    console.log(`Mazesnis batu dydziu sarasas.`);
} 
if(batuDydzioIlgis < balsuIlgis) {
    console.log(`Mazesnis batu dydziu sarasas.`);
}else {
    console.log(`Mazesnis balsu sarasas.`);
}
if(balsuIlgis < reitingoIlgis) {
    console.log(`Mazesnis balsu sarasas.`);
}else {
    console.log(`Mazesnis reitingo sarasas.`);
}
/* 5.c. (ar jie lygus) */
if(reitingoIlgis = batuDydzioIlgis) {
    console.log(`Sarasai vienodo ilgio.`);
}else {
    console.log(`Sarasai nelygus.`);
} 
if(batuDydzioIlgis = balsuIlgis) {
    console.log(`Sarasai vienodo ilgio.`);
}else {
    console.log(`Sarasai nelygus.`);
} 
if(balsuIlgis = reitingoIlgis) {
    console.log(`Sarasai vienodo ilgio.`);
}else {
    console.log(`Sarasai nelygus.`);
} 
/* 5.d. (ar nelygus) */
if(reitingoIlgis != batuDydzioIlgis) {
    console.log(`Sarasai nelygus.`);
}else {
    console.log(`Sarasai vienodo ilgio.`);
} 
if(batuDydzioIlgis != balsuIlgis) {
    console.log(`Sarasai nelygus.`);
}else {
    console.log(`Sarasai vienodo ilgio.`);
}
if(balsuIlgis != reitingoIlgis) {
    console.log(`Sarasai nelygus.`);
}else {
    console.log(`Sarasai vienodo ilgio.`);
} 
/* 5.e. (kuris didesnis arba lygus) */
if(reitingoIlgis >= batuDydzioIlgis) {
    console.log(`Reitingo sarasas didesnis arba lygus batu dydziu sarasui.`);
}else {
    console.log(`Nera teisingo atsakymo.`);
} 
if(batuDydzioIlgis >= balsuIlgis) {
    console.log(`Batu dydziu sarasas didesnis arba lygus balsu sarasui.`);
}else {
    console.log(`Nera teisingo atsakymo.`);
}
if(balsuIlgis >= reitingoIlgis) {
    console.log(`Balsu sarasas didesnis arba lygus reitingo sarasui.`);
}else {
    console.log(`Nera teisingo atsakymo.`);
} 
/* 5.f. (kuris mazesnis arba lygus) */
if(reitingoIlgis <= batuDydzioIlgis) {
    console.log(`Reitingo sarasas mazesnis arba lygus batu dydziu sarasui.`);
}else {
    console.log(`Nera teisingo atsakymo.`);
} 
if(batuDydzioIlgis <= balsuIlgis) {
    console.log(`Batu dydziu sarasas mazesnis arba lygus balsu sarasui.`);
}else {
    console.log(`Nera teisingo atsakymo.`);
}
if(balsuIlgis <= reitingoIlgis) {
    console.log(`Balsu sarasas mazesnis arba lygus reitingo sarasui.`);
}else {
    console.log(`Nera teisingo atsakymo.`);
} 
/* Ciklo for panaudojimas
1.a. kokia suma intervale imtinai (0-0) */
const sarasas = [0, 0];
let sum = 0; 
for(let i=0; i<sarasas.length; i++) {
    sum += sarasas[i];
    console.log(i + ')', sarasas[i], '->', sum);
}
/* 1.b. (0-4) */
const sarasas1 = [0, 1, 2, 3, 4];
let sum1 = 0;
for (let i=0; i<sarasas1.length; i++) {
    sum1 += sarasas1[i];
    console.log(i + ')', sarasas1[i], '->', sum1);
}
/* 1.c. (0-100) */
let sum2 = 0;
for (let i=0; i<=100; i++) {
    sum2 += i;
    console.log(i + ')', sum2);
}
/* 1.d. (574-815) */
let sum3 = 0;
for (let i=574; i<=815; i++) {
    sum3 += i;
    console.log(i + ')', sum3);
}
/* 1.e. (-50-50) */
let sum4 = 0;
for (let i=-50; i<=50; i++) {
    sum4 += i;
    console.log(i + ')', sum4);
}
/* 1.f. (-70-30) */
let sum5 = 0;
for (let i=-70; i<=-30; i++) {
    sum5 += i;
    console.log(i + ')', sum5);
}
/* 2.a. (perrasyti tekst. tipo kintamuju reiksmes is kito galo) (pavasaris) */
let backward = '';
for(let i = metuLaikas.length -1; i>=0; i--) {
    const letter = metuLaikas[i];
    backward += letter;
}
console.log(backward);
/* 2.b. (filmas) */
let backward1 = '';
for (let i=filmas.length - 1; i>=0; i--) {
    const letter1 = filmas[i];
    backward1 += letter1;
}
console.log(backward1);
/* 2.c. (gele) */
let backward2 = '';
for (let i=gele.length -1; i>=0; i--) {
    const letter2 = gele[i];
    backward2 += letter2
}
console.log(backward2);
/* 3.a. (kiek intervale yra skaiciu kurie dalijasi
    be liekanos is 3, 5 ir 7) (0-11) */
    const nuo = 0;
    const iki = 11;
    const daliklis = 3;
    let skaiciuKiekis = 0;
for (let i=0; i<=11; i++) {
    if (i % 3 === 0) {
       skaiciuKiekis++;
    }
}
   console.log (`Skaiciu intervale tarp ${nuo} ir ${iki}, 
besidalijanciu be liekanos is ${daliklis} yra ${skaiciuKiekis}
vienetai`);

const daliklis1 = 5;
for (let i=0; i<=11; i++) {
    if (i % 5 === 0) {
       skaiciuKiekis++;
    }
}
console.log(skaiciuKiekis);
   console.log (`Skaiciu intervale tarp ${nuo} ir ${iki}, 
besidalijanciu be liekanos is ${daliklis1} yra ${skaiciuKiekis}
vienetai`);

const daliklis2 = 7;
for (let i=0; i<=11; i++) {
    if (i % 7 === 0) {
       skaiciuKiekis++;
    }
}
console.log(skaiciuKiekis);
   console.log (`Skaiciu intervale tarp ${nuo} ir ${iki}, 
besidalijanciu be liekanos is ${daliklis2} yra ${skaiciuKiekis}
vienetai`);
/* 3.b. (8-31) */
const nuo1 = 8;
const iki1 = 31;
for (i=8; i<=31; i++) {
    if(i % 3 === 0){
        skaiciuKiekis++;
    }
}
console.log(skaiciuKiekis);
   console.log (`Skaiciu intervale tarp ${nuo1} ir ${iki1}, 
besidalijanciu be liekanos is ${daliklis} yra ${skaiciuKiekis}
vienetai`);

for (i=8; i<=31; i++) {
    if (i % 5 === 0) {
        skaiciuKiekis++;
    }
}
console.log(skaiciuKiekis);
   console.log (`Skaiciu intervale tarp ${nuo1} ir ${iki1}, 
besidalijanciu be liekanos is ${daliklis1} yra ${skaiciuKiekis}
vienetai`);

for (i=8; i<=31; i++) {
    if (i % 7 === 0) {
        skaiciuKiekis++;
    }
}
console.log(skaiciuKiekis);
   console.log (`Skaiciu intervale tarp ${nuo1} ir ${iki1}, 
besidalijanciu be liekanos is ${daliklis2} yra ${skaiciuKiekis}
vienetai`);
/* 3.c. (-18-18) */
const nuo2 = -18;
const iki2 = 18;
for (i=-18; i<=18; i++) {
    if(i % 3 === 0){
        skaiciuKiekis++;
    }
}
console.log(skaiciuKiekis);
   console.log (`Skaiciu intervale tarp ${nuo2} ir ${iki2}, 
besidalijanciu be liekanos is ${daliklis} yra ${skaiciuKiekis}
vienetai`);

for (i=-18; i<=18; i++) {
    if (i % 5 === 0) {
        skaiciuKiekis++;
    }
}
console.log(skaiciuKiekis);
   console.log (`Skaiciu intervale tarp ${nuo2} ir ${iki2}, 
besidalijanciu be liekanos is ${daliklis1} yra ${skaiciuKiekis}
vienetai`);

for (i=-18; i<=18; i++) {
    if (i % 7 === 0) {
        skaiciuKiekis++;
    }
}
console.log(skaiciuKiekis);
   console.log (`Skaiciu intervale tarp ${nuo2} ir ${iki2}, 
besidalijanciu be liekanos is ${daliklis2} yra ${skaiciuKiekis}
vienetai`);

/* FUNKCIJOS */
/* 1.a.b.c.d. (tuscia funkcija)  */
function tusciaFuncija() {
    return false;
}
console.log(tusciaFuncija());
/* 2.a.b.c.d. (daugyba) */
function daugyba(a, b) {
    const multiply = a * b;
    return multiply;
}

const skaicius1 = 5;
const skaicius2 = 8;
const skaicius3 = 7;

console.log(daugyba(skaicius1, skaicius2));
console.log(daugyba(skaicius3, skaicius2));
console.log(daugyba(skaicius1, skaicius3));
/* 3.a.b.c.d.e.f (skaitmenuKiekisSkaiciuje)*/
function skaitmenuKiekisSkaiciuje(skaicius) {
    if(typeof skaicius !== 'number') {
        return 'Pateikta netinkamo tipo reiksme.';
    } else {
        for (let i=0; i<skaicius.length; i++) {
        let skaitmenuKiekis = skaicius[i];
        return skaitmenuKiekis;
        }
    }
}  
console.log(skaitmenuKiekisSkaiciuje(5));


