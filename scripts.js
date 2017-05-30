alert("Policzmy (a * a) + (2 * a * b) - (b * b)");

var a = prompt("Podaj liczbę a:");
var b = prompt("Podaj liczbę b:");
var value = (a * a) + (2 * a * b) - (b * b);
alert("Wynik sprawdź w konsoli :)")
console.log(value);

if (value > 0) {
	console.log("Wynik dzialania (a * a) + (2 * a * b) - (b * b) dla a: " + a + " i b: " + b + " wynosi: " + value + " i jest dodatni");
} else if (value < 0) {
   console.log("Wynik dzialania (a * a) + (2 * a * b) - (b * b) dla a: " + a + " i b: " + b + " wynosi:" + value + " i jest ujemny");
} else if (value = 0) {
	console.log("Wynik dzialania (a * a) + (2 * a * b) - (b * b) dla a: " + a + " i b: " + b + "  wynosi 0");
} else {
console.log("Nie podano liczb. Spróbuj ponownie :)");
}
