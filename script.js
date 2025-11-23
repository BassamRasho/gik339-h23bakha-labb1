// Bara för att testa skillnaden på block-scope

/*
Reflektion uppgift 2
- var har inte block-scope. En var inuti { } läcker ut och kan skriva över en var med samma namn utanför.
- let och const har block-scope. Nya let/const inuti { } skuggar bara de yttre och gäller enbart i blocket.
- I min kod ser man att z (var) ändras globalt efter blocket, medan x/y (let/const) utanför blocket behåller sina värden.

Placering av console.log():
- Före blocket: man ser de yttre värdena.
- Inne i blocket: man ser de inre (skuggande) let/const och den lokala ändringen av z.
- Efter blocket: x/y är oförändrade (ytre), men z visar den ändring som gjordes i blocket (eftersom var saknar block-scope).
*/

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

/*
Reflektion uppgift 3
- '3' == 3  → true, eftersom == gör implicit typkonvertering.
- '3' === 3 → false, eftersom === kräver samma typ OCH samma värde.
- NaN === NaN → false (NaN är aldrig lika med något, inte ens sig självt). Kontrollera med Number.isNaN().
- null == undefined → true (de anses "lika" av ==), men null === undefined → false (olika typer).
- undefined är falsy. Exempel: (undefined ? 'truthy' : 'falsy') ger 'falsy'.

Kort förklaring:
- == kan konvertera t.ex. sträng → tal innan jämförelse, vilket kan ge överraskningar.
- === jämför utan konvertering och är därför att föredra för förutsägbara jämförelser.
- NaN representerar ett icke-tal (t.ex. misslyckad konvertering). null = "avsaknad av värde", undefined = "o­definierad/ej tilldelad".
*/


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

/*
Reflektion uppgift 4
- Sätt att skapa funktioner:
  1) Funktionsdeklaration: function f() {}  → hoistas med kropp; kan anropas före den står i koden.
  2) Funktionsuttryck: const f = function() {} → hoistas som variabeln (utan värde); kan anropas först efter tilldelning.
  3) Arrowfunktion: const f = () => {} → liknar funktionsuttryck (ingen egen this/arguments).
- Jag valde [ange ditt val här, t.ex. "funktionsdeklaration"] för att [kort motivering, t.ex. "kunna anropa den innan kodblocket"].

Anropa före/efter:
- Deklarationer funkar före de står i koden (pga hoisting).
- Uttryck/arrow funkar först efter raden där tilldelningen sker.

name som parameter/variabel:
- En parameter (t.ex. name i greet(name)) är ett lokalt namn inne i funktionen.
- Ett argument är det faktiska värdet man skickar in (t.ex. greet("Mikaela")).
- En variabel är en namngiven lagring i ett visst scope. En yttre variabel "name" kan skuggas av en parameter "name" i funktionen.
- Ändringar i det inre skuggar bara i sitt scope; utskrifter utanför påverkas inte om man inte rör den yttre variabeln.
*/
