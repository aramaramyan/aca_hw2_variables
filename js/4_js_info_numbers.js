
// Sum numbers from the visitor.

let num1 = +prompt("Enter the first number.");
let num2 = +prompt("Enter the second number.");

console.log(num1 + num2);

/*
Why 6.35.toFixed(1) == 6.3?

Because: toFixed(1) function shows only 1 digit after dot.
*/

// Repeat until the input is a number.

function onlyNumbers() {
	let num;

	do {
		num = prompt("Enter a number please?");
	} while (!isFinite(num));

	if (num === null || num === '') {
		alert("Please enter something )))");
		onlyNumbers();
	}

	return +num;
}

conoslelog(onlyNumbers());

// This loop is infinite. It never ends. Why?

/*
let i = 0;
while (i != 10) {
  i += 0.2;
}

Because i would never equal 10. */

// A random number from min to max.

function random(min, max) {
	return min + Math.random() * (max - min);
}

// A random integer from min to max.

function randomInteger(min, max) {
	let random = min + Math.random() * (max + 1 - min);
	return Math.floor(random);
}