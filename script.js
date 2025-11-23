// Bara för att testa skillnaden på block-scope
console.log("Kollar block-scope...");

// Variabler utanför block
let x = "let utanför block";
const y = "const utanför block";
var z = "var utanför block";

console.log("Utanför block:", x, y, z);

{
    // Nya x och y gäller bara här inne (block scope)
    let x = "let inne i block";
    const y = "const inne i block";

    // var skriver över den gamla z (ingen block-scope)
    var z = "var ändrad i block";

    console.log("Inne i block:", x, y, z);
}

console.log("Efter block:");
console.log("x:", x);   // samma som innan
console.log("y:", y);   // samma som innan
console.log("z:", z);   // ändrad (var är globalt)
  
// enkel funktion som säger hej
function greet(namn) {
    return "Hej " + namn + "!";
}

console.log(greet("Student"));

// En liten miniräknare som hämtar två tal från användaren
function calc() {
    const input1 = prompt("Skriv första talet:");
    const input2 = prompt("Skriv andra talet:");

    const num1 = Number(input1);
    const num2 = Number(input2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Du måste skriva in riktiga nummer!");
        return;
    }

    const resultat = {
        plus: num1 + num2,
        minus: num1 - num2,
        gånger: num1 * num2,
        delat: num2 !== 0 ? (num1 / num2) : "Går inte dela med 0"
    };

    console.log("Resultat:");
    console.log("Addition:", resultat.plus);
    console.log("Subtraktion:", resultat.minus);
    console.log("Multiplikation:", resultat.gånger);
    console.log("Division:", resultat.delat);

    return resultat;
}

// kör funktionen så man kan testa i konsolen
calc();
