// ----------------------------
//  Variabler: var, let, const
// ----------------------------

// Exempel på block-scope
console.log("Test av block-scope börjar...");

let x = "let utanför block";
const y = "const utanför block";
var z = "var utanför block";

console.log("Utanför block:", x, y, z);

{
    // Här skapas nya x och y eftersom let/const är blockscope
    let x = "let inuti block";
    const y = "const inuti block";

    // var däremot skriver över den tidigare variabeln
    var z = "var ÄR ändrad i block";

    console.log("Inuti block:", x, y, z);
}

console.log("Efter block:");
console.log("x:", x);  // den utanför blocket
console.log("y:", y);  // samma som utanför
console.log("z:", z);  // ändrad, eftersom var är function/global scope


// -----------------------------------------
//  Jämförelser: == vs ===
// -----------------------------------------

console.log("\nJämförelser:");

console.log("'4' == 4  →", '4' == 4);      // true – jämför bara värde
console.log("'4' === 4 →", '4' === 4);    // false – jämför både typ & värde

// NaN är aldrig lika med något, inte ens sig själv
console.log("NaN === NaN →", NaN === NaN); // false


// -----------------------------------------
//  Funktioner: greet()
// -----------------------------------------

function greet(name) {
    // Gör namn enklare att visa
    return "Hej " + name + "!";
}

// Exempel-utskrift
console.log(greet("Student"));


// -----------------------------------------
//  Funktioner: calc()
// -----------------------------------------

function calc() {
    const input1 = prompt("Skriv första talet:");
    const input2 = prompt("Skriv andra talet:");

    const num1 = Number(input1);
    const num2 = Number(input2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Du måste skriva giltiga nummer!");
        return;
    }

    const resultat = {
        addition: num1 + num2,
        subtraktion: num1 - num2,
        multiplikation: num1 * num2,
        division: num2 !== 0 ? (num1 / num2) : "Kan ej dela med 0"
    };

    console.log("Resultat:");
    console.table(resultat);
    alert("Kolla konsolen (F12) för resultat!");
}
