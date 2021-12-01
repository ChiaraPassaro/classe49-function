// function sommaNumeri(num1, num2) { //dichiarazione
//   // alert(num1 + num2);
//   let somma = num1 + num2;
//   return somma; // con retuirn esco subito fuori dalla funzione

//   console.log('pippo'); // non viene mai valutato
// }

// let nuovaVar = sommaNumeri(10, 10);
// // let nuovaVar = 10 + 10;
// console.log(nuovaVar);


// console.log(sommaNumeri(2, 3)); // stampo ma non salvo il risultato
// let somma1 = sommaNumeri(12, 20); //prendo il risultato della funzione
// let somma2 = sommaNumeri(5, 10); //prendo il risultato della funzione
// let sommaTotale = sommaNumeri(somma1, somma2);
// console.log(sommaTotale);
// console.log(somma);

// sommaNumeri(2, 3); //invocazione


// console.log(numbers.includes(number));


// numeri random: generare 10 numeri random(con un for o con un while) attraverso una funzione(copiamola da w3schools) e stamparli a schermo
// function getRndInteger(min, max) {
//   console.log('entro in funzione', min, max); // 2, 10
//   let stringa = 'pippo';// creo una variabile ma non la uso
//   return Math.floor(Math.random() * (max - min + 1)) + min; //restituisco valore calcolato
// }


// function getRndInteger(min, max) {
//   console.log('entro in funzione', min, max); // 2, 10
//   let numberRand = Math.floor(Math.random() * (max - min + 1)) + min;
//   return numberRand //restituisco valore calcolato
// }

// console.log(stringa);//errore non esiste variabile fuori
// console.log(getRndInteger(10, 100));

// const number = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
// const number = getRndInteger(2, 10);
// console.log(number);
// const container = document.querySelector('.container');

// for (let index = 0; index < 10; index++) {
//   const number = getRndInteger(1, 100);
//   container.innerHTML += number;
// }


// pari o dispari: scrivere una funzione per verificare se un numero è pari o dispari, quindi chiedere un numero all'utente e comunicargli se è pari o dispari

// function isEven(num) { //num e un nome di variabile interna
//   let string = '';
//   if (num % 2 == 0) {
//     string = 'pari';
//   } else {
//     string = 'dispari';
//   }
//   //far uscire il valore
//   return string
// }

// function isEven(num) { //num e un nome di variabile interna
//   if (num % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // console.log(isEven(2)); //test di funzionamento


// //chiadiamo all'utente di inserire un numero
// let numberUser = parseInt(prompt('inserisci un numero intero')); //creo il primo prompt

// //controlliamo se quello che ha inserito l'utente e un numero
// // se non lo e lo devo richiedere altrimenti passo oltre
// while (isNaN(numberUser)) { //fiche ho un NaN continuo a richiedere il numero
//   console.log('inizio while');
//   numberUser = parseInt(prompt('inserisci un numero intero')); // riassegno un nuovo valore e fgaccio comparire un nuovo prompt
// }

// console.log(isEven(numberUser));


//arrow functions


//funzione con nome
// const myFunction = () => 1 + 1; //return automatico
// const myFunction = () => {
//   //codice
//   return 1 + 1;
// }

// const resultFunction = myFunction();
// console.log(resultFunction);

// //funzione anonima
// document.getElementById('button').addEventListener('click',
//   () => {
//     return console.log(this); //il this e diverso dalla function normale
//   }
// );

function nomeFunzione() {
  return this
}

const myFunction3 = () => 'pippo';
const myFunction2 = () => 2;
const myFunction1 = () => this;
console.log(myFunction1());
console.log(nomeFunzione());

document.getElementById('button').addEventListener('click',
  () => {
    return console.log(this); //window
  }
);
document.getElementById('button').addEventListener('click',
  function () {
    return this; //questo e elemento su cui clicco
  }
);