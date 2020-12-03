function bigNum (numList) {
    // input validation

    if (!Array.isArray(numList)) {
        return 'ERROR: reikia pateikti array tipo verte su skaiciais.'
    }

    if(numList.length === 0) {
            return 'ERROR: skaiciu sarasas turi nuti ne tuscias.'
    }

    //logic
    let maxNumber = -Infinity;

for (let num of numList) {                          
                            
    if (typeof num !== 'number') {
        continue;
    }
    if (!isFinite(num)) {
        continue;
    }
    if (num > maxNumber) {
        maxNumber = num;
    }
}
//POST LOGIC VALIDATION
    if(maxNumber === -Infinity) {
        return 'ERROR: nerasta tikru skaiciu.'
    }
    
    //return result

    return maxNumber;
}


console.log( bigNum( 'pomidoras'));                            // su if typeofu
console.log( bigNum([]));                                        // su if typeofu

console.log( bigNum( [ 1 ] ), '->', 1 );                    //paskutinis eileje
console.log( bigNum( [ 1, 2, 3 ] ), '->', 3  );             //paskutinis eileje

console.log( bigNum( [ -5, 78, 14, 0, 18 ] ), '->', 78 );       //paskutinis eileje
console.log( bigNum( [ 69, 69, 69, 69, 66 ] ), '->', 69 );      //paskutinis eileje

console.log( bigNum( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ), '->', -1 );  //su numList[0]
console.log( bigNum([-98, 15, 45, -3.14, 'labas'])); 


console.log( bigNum(['labas', 'rytas', 'tra', 'lia', 'lia']));              //su typof ir isFinite
console.log( bigNum(['labas', 'rytas', 'tra', 'lia', 'lia', Infinity]));    //su typof ir isFinite
console.log('-------------------------------------------');

console.log( bigNum({}));  

//console.log( bigNum(null));    


