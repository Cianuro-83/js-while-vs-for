console.log("CIAO CIANURO: oggi CICLO WHILE vs CICLO FOR");

// creo la variabile numero
let numero;
// creo array dove pushare i numeri dispari
let numeriDispari = [];
// chiedo numero all'utente
// do {
numero = parseInt(prompt("Inserisci un numero: "));
console.log(numero);
while (isNaN(numero) || numero <= 0 || numeriDispari.lenght >= 10);
{
  if (numero % 2 === 1) {
    numeriDispari.push(numero);
  }
  // chiusura ciclo while
}
console.log("hai inserito " + numero, numeriDispari);
