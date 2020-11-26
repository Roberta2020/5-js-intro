/* Matematines operacijos*/

const skaicius1 = 15;
const skaicius2 = 8;

const suma = skaicius1 + skaicius2;

console.log(skaicius1, '+', skaicius2, '=', suma);


const skaicius3 = 88;
const skaicius4 = 77;
const skirtumas = skaicius3 - skaicius4;

console.log(skaicius3, '-', skaicius4, '=', skirtumas);

const skirtumas2 = skaicius1 - skaicius2;
console.log(skaicius1, '-', skaicius2, '=', skirtumas2);

const sandauga = skaicius1 * skaicius2;
console.log(skaicius1, '*', skaicius2, '=', sandauga);

console.log('-----------------');

const zodis1 = 'labas';
const zodis2 = 'rytas';
const zodis3 = 'Lietuva';

// Labas rytas, Lietuva.
//Labas!

const sakinys = zodis1 + ' ' + zodis2 + ', ' + zodis3 + '.';
const sakinys2 = zodis1 + '!';

console.log(sakinys);
console.log(sakinys2);


/**Tekstu iniciavimo/rasymo subtilybes */

const txtl1 = "Lorem";
const txtl2 = 'ipsum';

//sakinyje yra vienguba ' kabute.
//sakinyje yra dviguba " kabute.

const txt3 = "sakinyje yra vienguba ' kabute.";
const txt4 = 'sakinyje yra dviguba " kabute.';
console.log(txt3);
console.log(txt4);

//sakinyje yra ir vienguba ' ir dviguba " kabute. 

const txt5 = 'sakinyje yra ir vienguba \' ir dviguba \" kabute.';
const txt6 = "sakinyje yra ir vienguba \' ir dviguba \" kabute.";

const PVM = 21;
const petroPajamos = 100;
const marytesPajamos = 200;

const petroMokeesciai = petroPajamos + PVM  / 100;
const marytesMokesciai = marytesPajamos + PVM / 100;

console.log("Mokesciai:", petroPajamos, "-->", petroMokeesciai);
console.log("Mokesciai:", marytesPajamos, "-->", marytesMokesciai);

/* 
 <div>
        <h1>JS rocks!</h1>
        <p>Lorem, ipsum.</p>
</div>
*/
const htmlText = 'Lorem ipsum';
const jsText = 'JC rocks!'
const pilnasHTML =  "<div>\n\
<h1>" + jsText + "</h1>\n\
<p>" + htmlText + "</p>\n\
</div>";
console.log(pilnasHTML); 

const backtickHTML = `<div>
<h1>${jsText}</h1>
<p>${htmlText}</p>
</div>`;
console.log(backtickHTML);

