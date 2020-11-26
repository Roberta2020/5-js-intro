const pazymiai = [10, 4, 8, 6];

/* pazymiai:
- vidurkis
- isrikiuoti (min, max)
- surasti ar turi konkretu skaiciu
- surasti min, max reiksme
*/

// skaiciuojame vidurki

const visuSkaiciuSuma = pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3];
const skaiciuKiekis = pazymiai.length;
const vidurkis = visuSkaiciuSuma / skaiciuKiekis;
console.log("Vidurkis:", vidurkis);

/*zodynas
sujungti reiksmes atgaline tvarka ir iterpti ", "
 */
const zodynas = ['labas', 'rytas', 'lietuva'];

console.log(zodynas);
const sakinys = zodynas[2] + ", " + zodynas[1] + ", " + zodynas[0];

