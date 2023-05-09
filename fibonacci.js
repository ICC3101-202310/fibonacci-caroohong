function fibonacci(n)
{
	if (n <= 1)
	{
		return n;
	}
	const actual = fibonacci(n-1) + fibonacci(n-2);
	return actual;
}

const path = require("path");
const fs = require("fs");
const filePath = path.join(__dirname, "input.txt");

fs.readFile(filePath, "utf-8", (error, data)=>
{
	if (error)
	{
		console.error("Hubo un error al leer el archivo: ", err);
		return;
	}
	const n = parseInt(data.trim());
	console.log("F(",n,") = ", fibonacci(n));
});