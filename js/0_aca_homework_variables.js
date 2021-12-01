// PRIMITIVE TYPES

{
	// Declare two variables: admin and name.

	let admin;
	let name;

	// Write the string "John" to the name variable.

	name = "John";

	// Copy the value from the name variable to admin.

	admin = name;

	// Display the value admin.

	console.log(admin);
}

{
	// What will be output of i and n?

	let i = 10;
	let n = i++ % 5;

	// i = 10 (because of Post-increment operator), so n = 10.
}

// {
// 	// Swap two variables.

// 	let a = 10,
// 		b = 3;

// 	let c = a;
// 	a = b;
// 	b = c;
// }

{
	// Swap two variables without using the third one.

	let a = 10,
		b = 3;

	a = a + b;
	b = a - b;
	a = a - b;

	// Or we can use Destructuring

	[a, b] = [b, a];
}