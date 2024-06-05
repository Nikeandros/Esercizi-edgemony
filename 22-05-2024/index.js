// Funzione per stampare le indicazioni

function indicazioni(...directions) {
    directions.forEach(direction => {
        console.log(direction);
    });
}

indicazioni('su', 'su', 'sinistra');
// output:
// 'su'
// 'su'
// 'sinistra'


// Funzione per contare le indicazioni


function contaIndicazioni(...directions) {
    const directionsCount = {
        su: 0,
        giu: 0,
        sinistra: 0,
        destra: 0
    };

    directions.forEach(direction => {
        if (directionsCount.hasOwnProperty(direction)) {
            directionsCount[direction]++;
        }
    });

    return directionsCount;
}

console.log(contaIndicazioni('su', 'su', 'sinistra', 'giu', 'giu', 'destra', 'su'));
// output:
// { su: 3, giu: 2, sinistra: 1, destra: 1 }


// Funzione per contare i click


let count = 0;

const countClick = () => {
    count++;
    console.log(`click -> ${count}`);
}

document.body.onclick = countClick;

// output:
// click -> 1 (dopo il primo click)
// click -> 2 (dopo il secondo click)
// click -> 3 (dopo il terzo click)
// e così via...


// Esercizio Bonus


function alphabetPosition(string) {
    const indexForEachLetter = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10,
        k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19,
        t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    };

    let output = [];

    for (let letter of string.toLowerCase()) {
        if (indexForEachLetter.hasOwnProperty(letter)) {
            output.push(indexForEachLetter[letter]);
        }
    }

    return output.join(' ');
}

console.log(alphabetPosition('Rosso di sera, bel tempo si spera'));
// output: "18 15 19 19 15 4 9 19 5 18 1 2 5 12 20 5 13 16 15 19 9 19 16 5 18 1"
