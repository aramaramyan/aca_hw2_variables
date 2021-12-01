
// What's the result of OR?

alert(null || 2 || undefined); // 2 (the first truthy value.)

// What's the result of OR'ed alerts?

alert(alert(1) || 2 || alert(3)); // first 1, then 2. (because aleert(1) returns undefined)

// What is the result of AND?

alert(1 && null && 2); // null (the first falsy value.)

// What is the result of AND'ed alerts?

alert(alert(1) && alert(2)); // first 1, then undifined (because alert(1) returns undefined and main alert show it)

// The result of OR AND OR.

alert(null || 2 && 3 || 4); // 3 (The precedence of && is higher than ||, so it executes first.)

// Check the range between 14 and 19.

if (age >= 14 && age <= 90) {
	// some code...
}

// Check the range outside 14 and 19.

if (age < 14 || age > 90) {
	// some code...
}

/* Which of these alerts are going to execute?
	What will the results of the expressions be inside if(...)? */

if (-1 || 0) alert('first');         // -1, truthy (RUN)
if (-1 && 0) alert('second');        // 0, falsy (DOESN'T RUN)
if (null || -1 && 1) alert('third'); // 1, truthy (RUN)

// Check the login.

const userName = prompt("Who's there?");

if (userName === "Admin") {

	const password = prompt("Password?");

	if (password === "TheMaster") {
		alert("Welcome!");
	} else if (password === '' || password === null) {
		alert("Canceled");
	} else {
		alert("Wrong password");
	}

} else if (userName === '' || userName === null) {
	alert("Canceled");
} else {
	alert("I don't know you");
}