/**
 Ternary operator 

 liaudiskai: inline if'as kuris savyje turi ir gali tueti tik TRUE ir FALSE dalis.

 IF klausimas ? jeigu teigiamas ats : jeigu neigiamas ats
 */

 console.log(4 === 2 ? 'Daugiau' : 'Ne daugiau');


 const amziausRiba = 40;
 const amzius1 = 9;
 const amzius2 = 99;

 const verdiktas1 = amzius1 >= amziausRiba ? 'I prezidentus' : 'Dar palauk..';
 const verdiktas2 = amzius2 >= amziausRiba ? 'I prezidentus' : 'Dar palauk..';

 console.log(`Jei tau ${amzius1} - ${verdiktas1}`);
 console.log(`Jei tau ${amzius2} - ${verdiktas2}`);

 const makeSense = true;
 const ats = makeSense ? 'taip' : 'ne';

 console.log(ats);

 console.log('-------------------------------------');

 const sezonas = 'vasara';
 const temperatura = 10;

 if (sezonas === 'vasara') {
     if (temperatura > 10) {
         console.log('Maike');   
     }
} else {
console.log('Golfas');
 } else {
    if (temperatura > 10) {
        console.log('Megztinis');
    } else {
        console.log('Striuke');
    }
 }

 const kaVIlktis = sezonas === 'vasara' ? 
                    temperatura > 10 ? 
                    'Maike' : 
                    "Golfas"
                    : temperatura > 10 ? 
                    'Megztinis' : 
                    'Striuke';

 console.log(kaVIlktis);