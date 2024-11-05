/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numUnoEs1 = 5;
let numDueEs1 = 5;
console.log("ESERCIZIO 1");
if (numUnoEs1 > numDueEs1){
  console.log("Il primo numero "+ numUnoEs1 + " è il numero maggiore.");
}
  else if (numDueEs1 > numUnoEs1){
    console.log("Il secondo numero " + numDueEs1 + " è il numero maggiore");
  }
  else {
    console.log("I numeri sono uguali");
  }
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 2");
let numEs2 = 12;
if (numEs2 !== 5){
  console.log("Il numero non è uguale a 5")
}else {
  console.log("Il numero è 5")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 3");
let numEs3 = 173;
let restoEs3 = numEs3 % 5;
if (restoEs3 === 0){
  console.log("Il numero è divisibile per 5");
}else{
  console.log("Il numero non è divisibile per 5")
}



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 4");
let numUnoEs4 = -8;
let numDueEs4 = 16;
if (numUnoEs4 === 8 || numDueEs4 === 8 ){
  console.log("Uno dei due numeri forniti è uguale a 8");
}
if(numUnoEs4 + numDueEs4 === 8 || numDueEs4 + numUnoEs4 === 8 ) {
  console.log("La loro addizione è 8");
} else if(numUnoEs4 - numDueEs4 === 8 || numDueEs4 - numUnoEs4 === 8 ) {
  console.log("La loro sottrazione è 8");
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 5");
let totalShoppingCart = 40;
const spedizione = 10;
let costoTotale = totalShoppingCart;
if (costoTotale <= 50){
    costoTotale = totalShoppingCart + spedizione;
    console.log("Il costo totale è di: " + costoTotale);
}else {
  console.log("Hai diritto alla spedizione gratuita! Il costo totale è di " + costoTotale)
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 6");
const percentualeSconto =20;
let costoScontato = totalShoppingCart + (totalShoppingCart * 20 /100);
if (costoScontato <= 50){
  costoScontato += spedizione;
  console.log("Durante il BLACK FRIDAY , il costo totale è di: " + costoScontato);
}else {
console.log("Durante il BLACK FRIDAY , hai diritto alla spedizione gratuita! Il costo totale è di " + costoScontato)
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */   //NON UN ARRAY
console.log("ESERCIZIO 7");
let varA = 1;
let varB = 5;
let varC = 9;
if (varA > varB && varA > varC){
  if (varB > varC) {
    console.log(varA + " "+ varB + " " + varC );
  }else{
    console.log(varA + " " + varB + " " + varC);
  }
}else if(varB > varA && varB > varC){
  if(varA > varC){
    console.log(varB + " "+ varA + " "+ varC);
  }else{
    console.log(varB + " "+ varC + " "+ varA);
  }
}else if(varC > varA && varC > varA) {
      if(varA > varB){
        console.log(varC + " "+ varA + " "+ varB);
      }else{
        console.log(varC + " "+ varB + " "+ varA);
      }
}



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 8");
let varFornita = 10;
if (typeof varFornita == "number"){
  console.log("Il valore fornito è un numero")
}else{
  console.log("Il valore fornito NON è un numero")
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 9");

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
