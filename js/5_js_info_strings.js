
// Uppercase the first character.

function toUpperCaseFirstStr(str) {
	if (typeof (str) === "string") {
		return str[0].toUpperCase() + str.slice(1);
	} else if (isNaN(+str)) {
		return alert("Please enter string");
	} else {
		return alert("Please enter string");
	}
}

// Check for spam.

function checkSpam(str) {
	let lowerStr = str.toLowerCase();

	return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));

// Truncate the text.

function truncate(str, maxlength) {
	if (str.length > maxlength) {
		return str.slice(0, maxlength - 1) + '…';
	} else {
		return str;
	}
}

// Extract the money.

function extractMoney(str) {
	if (typeof (str) === "string") {
		return +str.slice(1);
	} else {
		return alert("Error: Incorrect type!");
	}
}