const darzove = 'morka';

switch(darzove) {
    case 'morka':
        console.log('Labai gerai tavo regejimui.');
        break;

    case 'bulve':
        console.log('Darzoviu "duona"?..');
        break;
        
    case 'pomidoras':
        console.log('Storasraudonaskruostis');
        break;

    default:
        console.log('Neatitiko jokios zinomos darzoves.');
        break;
}

/* Kada switch'e neriekia kas kiekvienu case naudoti break?
Kai u=davinys yra apie darbo procesa ir
galimybe ji perrimti kazkuriame proceso zingsnyje.
*/

/* PROCESAS: rytinio gerimo gamyba.
- pasiimti puodeli
- isipilti pagrindini ingridienta
- saldiklio pagal poreiki
- uzpilti vandens
- ismaisyti
- gerti
*/

const etapas = 'puodelis';

switch(etapas) {
    case 'puodelis':
        console.log('1) pasiimti puodeli;');
        case 'ingridientai':
            console.log('2) isipilti pagrindini ingridienta;');
            case 'saldiklis':
                console.log('3) saldiklio pagal poreiki;');       
                case 'vanduo':
                    console.log('4) uzpilti vandens;');    
                    case 'ismaisyti':
                        console.log('5) ismaisyti;');  
                        case 'gerti':
                            console.log('6) gerti;');  
                            break;

                            default:
                               console.log('nezinomas proceso zingsnis'); 
}