/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
// function area (l1 , l2) {
//     result = l1 * l2;
//     console.log(result);    
//     }
//     area(1, 20);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// function crazySum (x, y){
//      sum = x + y ;
//     if (x === y) {
//         console.log(sum * 3);
        
//     }else{
//         console.log(sum);
//     }
// }
// crazySum(20, 10);

/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

// /* SCRIVI QUI LA TUA RIsPOSTA */
// function crazyDiff (x) {
//     diff = x - 19;
//     if (diff >= 20) {
//         console.log(diff * 3);
        
//     }else{
//         console.log(diff);
//     }

// }
// crazyDiff(40);

/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// function boundary (x) {
//     if (x <= 19){
//         console.log("false");
//     }else if(x <= 100){
//         console.log("true");
//     }else if (x === 400){
//         console.log("true");
//     }else{
//         console.log("false");
//     }
// }
  
// boundary(80);

/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// function codify (string){
//     if (string.indexOf("code") === 0) {
//         return string;    
//     }else{
//         return "code" + string;
//     }
  

// }
// console.log(codify("code"));


/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// function check3and7(num) {
//     if (num % 3 === 0 || num % 7 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   console.log(check3and7(5));

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/


/* SCRIVI QUI LA TUA RISPOSTA */
//  function reverseString (string) {
//     return string.split('').reverse().join('');
// }
//  console.log(reverseString("Epicode"));

/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// function upperfirst (string1, string2){
//     let result1 = string1.charAt(0).toUpperCase() + string1.slice(1).toLowerCase();
//     let result2 = string2.charAt(0).toUpperCase() + string2.slice(1).toLowerCase();
//     return [result1, result2]
// }
// console.log(upperfirst('stringa1','stringa2'));

/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// function cutString (stringa) {
//     let result = stringa.slice(1,5);
//     return [result]
// }
// console.log(cutString('taglio'));
/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom (n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(Math.floor(Math.random()*11));    
    }
    return array
}
console.log(giveMeRandom(10));
