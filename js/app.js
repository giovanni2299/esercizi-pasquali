//Esercizio 1
//Data una stringa, restituire la versione in alfabeto farfallino 
//(le vocali devono essere trasformate in questo modo: a -> afa, e -> efe, i -> ifi, o -> ofo, u- > ufu)

//creiamo una costante con una stringa = "Marco"

const nome = 'Christian';

const newString = [];

for(let i = 0; i < nome.length; i++){
    const letter = nome[i];

    if(letter === 'a'){
        newString.push('afa');
    } else if(letter === 'e'){
        newString.push('efe');
    } else if(letter === 'o'){
        newString.push('ofo')
    } else if(letter === 'i'){
        newString.push('ifi')
    } else if(letter === 'u'){
        newString.push('ufu')
    } else{
        newString.push(letter);
    }
}
console.log('Alfabeto-Farfallino: ', newString.join(''))


//Esercizio 2
//Dato un array di numeri restituire un array di solo numeri pari

let numeri = [];
let pari = [];

let min = 1;
let max = 20;

while(numeri.length < max){

    const randomNumbers = Math.floor(Math.random() * max) + min;

    let presente = false;

    for(let i = 0; i < numeri.length; i++){

        if(numeri[i] === randomNumbers){
            presente = true;
        }
    }

    if(presente === false){
        numeri.push(randomNumbers)
    }

}

for(let i = 0; i < numeri.length; i++){
    let currentNumber = numeri[i]
    let rest = currentNumber % 2;

    if(rest === 0){
        pari.push(currentNumber)
    }
}

console.log('pari: ', pari)
console.log('numeri: ', numeri)


//versione col filter
const numeriPari = numeri.filter((num) => num % 2 === 0);
console.log('pari-filter: ', numeriPari)

//Esercizio 3
//se ho una stringa "infinta" in loop e voglio stampare solo da un indice ad un altro come faccio?

const stringaInfinita = 'ABCDEABCDEABCDEABCDABCDE'

let iMin = 5;
let iMax = 10;

const letterArray = [];

for(let i = iMin; i < iMax; i++){
    const currentLetter = stringaInfinita[i];
    letterArray.push(currentLetter)
}

console.log('stringa Infinita: ', letterArray.join(''))
