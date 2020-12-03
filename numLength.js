function numLength(num) {
    //input validation
    if (typeof num !== 'number') {
        console.log('ERROR: duotas ne skaicius');
        return 'ERROR: duotas ne skaicius';
    }
    if (isNaN(num)) {
        return 'ERROR: skaicius turi buti tikras (ne NaN).'
    }
    
    //logic

       let length = 0;
    const textNumber = '' + num;
    length = textNumber.length;

    //return, rezultato grazinimas
    return length;

    
}
// neigiamas pavyzdys
console.log( numLength(true));
console.log( numLength('asd'));
console.log(numLength(NaN));
console.log(numLength(undefined));
console.log(numLength(Infinity));
console.log(numLength([5, 5, 5, 5, 5]));
console.log(numLength(['asd', 'asd', 'asd', 'asd', 'asd']));


// teigiami pavyzdziai
console.log(numLength(5), '->', 1);
console.log( numLength(781), '->', 3);
console.log( numLength(37060123456), '->', 11);
console.log( numLength(2 + 2 * 2), '->', 1);
console.log('----------------------------------------------');


