/*
Reflektion: uppgift 2
- let och const är blockscope de existerar bara inuti { }.
- var är function-scope  överlever utanför block.
- Om man loggar let/const innan deklaration får man ReferenceError (TDZ).
*/

console.log("Före blocket:", typeof a, typeof b, typeof c);
{
  let a = "Jag är let";
  const b = "Jag är const";
  var c = "Jag är var";

  console.log("Inuti blocket:", a, b, c);
}
console.log("Efter blocket (var finns kvar):", typeof c, c);

/*
Reflektion: uppgift 3
- == gör typkonvertering → "3" == 3 är true.
- === jämför typ OCH värde → "3" === 3 är false.
- NaN === NaN är alltid false (NaN är aldrig lika med något, inte ens sig själv).
- null == undefined true (lösa likhet)
- null === undefined  false (olika typer)
- undefined är falsy i en ternary blir den falska grenen vald.
*/

console.log("'3' == 3:", "3" == 3);
console.log("'3' === 3:", "3" === 3);
console.log("NaN === NaN:", NaN === NaN);
console.log("null == undefined:", null == undefined);
console.log("null === undefined:", null === undefined);

let maybe;
console.log("maybe är:", maybe ? "truthy" : "falsy");

/*
Reflektion: uppgift 4
 Skillnader i sätt att skapa funktioner:
   - Funktionsdeklaration hoistas helt, därför kan man anropa den innan den står i koden.
   - Funktionsuttryck (const f = function(){}) hoistas inte på samma sätt och kan inte
     anropas innan deklarationen
   - Arrowfunktion är samma som funktionsuttryck.
   Jag valde funktionsdeklaration eftersom den är enkel och kan anropas var som helst.

Parameter vs variabel vs argument:
   - Parameter: namnet i funktionsdeklarationen (t.ex. name i greet(name)).
   - Argument: värdet man skickar in när funktionen anropas (t.ex. "farhiya").
   - Variabel: vilket som helst namn som lagrar ett värde (globalt eller lokalt).

 Var man kan anropa funktioner:
   - Funktionsdeklarationer: före och efter deras plats i filen.
   - Funktionsuttryck/arrow: endast efter deklaration.
- Skuggning av variabeln name:
   - En global variabel name kan skuggas av parametern name i funktionen greet().
   - Inuti greet() används alltid parametern, aldrig den globala.
   - Ändras global name påverkar det inte parametern eller tvärtom.
*/

let name = "GlobalNamn";

function greet(name) {
  return "Hej " + name;
}
console.log(greet("farhiya"));
console.log("Global variabel name:", name);

function calc() {
  const input1 = prompt("Ange första talet:");
  const input2 = prompt("Ange andra talet:");

  const n1 = Number(input1);
  const n2 = Number(input2);

  if (!input1 || !input2 || Number.isNaN(n1) || Number.isNaN(n2)) {
    alert("Ogiltig input , du måste ange två siffror!");
    return;
  }

  const sum = n1 + n2;
  const product = n1 * n2;
  const equal = n1 === n2;

  const str = `Summan är ${sum}, produkten är ${product} och talen är ${equal}.`;
  console.log("Sträng:", str);

  const arr = [sum, product, equal];
  console.log("Array:", arr);

  const obj = { sum, product, equal };
  console.log("Objekt:", obj);
  console.table(obj);

  return obj;
}
