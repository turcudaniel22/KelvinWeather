// The forecast today is 293 Kelvin.
const kelvin = 293; // Kelvin temperature (constant since it doesn't change)

// Celsius is 273 degrees less than Kelvin.
const celsius = kelvin - 273; // Convert Kelvin to Celsius

// Use the formula to calculate Fahrenheit: Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius * (9 / 5) + 32; // Convert Celsius to Fahrenheit

// Use Math.floor() to round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit); // Round Fahrenheit down to the nearest integer

// Log the Fahrenheit temperature
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert Celsius to Newton using the formula: Newton = Celsius * (33/100)
let newton = celsius * (33 / 100); // Convert Celsius to Newton

// Use Math.floor() to round down the Newton temperature
newton = Math.floor(newton); // Round Newton down to the nearest integer

// Log the Newton temperature
console.log(`The temperature is ${newton} degrees Newton.`);
