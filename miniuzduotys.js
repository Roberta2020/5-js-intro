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