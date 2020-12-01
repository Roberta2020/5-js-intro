function mokesciai(pajamos) {
    const neapmokestinamasMinimumas = 500;
    const PVM = 20;
    let moketinaSuma = 0;

    for (let i = 0; i < pajamos.length; i++) {
        const uzdarbis = pajamos[i];

            if (uzdarbis > neapmokestinamasMinimumas) {
                moketinaSuma += uzdarbis - neapmokestinamasMinimumas;
            }
        }


        const mokestis = moketinaSuma * PVM / 100;
    return mokestis;
}

const pajamos1 = [100, 500, 800, 5000, 15000];  
const pajamos2 = [100, 500, 200];  
const pajamos3 = [10000, 10000, 10000, 10000, 10000, 10000];

const mokesciai1 = mokesciai(pajamos1);
const mokesciai2 = mokesciai(pajamos2);
const mokesciai3 = mokesciai(pajamos3);

console.log('Pirmasis susimoka:', mokesciai1);
console.log('Pirmasis susimoka:', mokesciai2);
console.log('Pirmasis susimoka:', mokesciai3);
