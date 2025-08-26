import prompt from 'prompt';
// // // // JavaScript Fundamentals - Part 1
// // // // We'll write our code here!
// // // let js = "amazing";
// // // console.log(40 + 8 + 23 - 10);
// // // console.log(js);

// // // console.log("=== VARIABLES ===");

// // // let firstName = "Jonas";
// // // console.log(firstName);

// // // let age = 30;
// // // age = 21; 
// // // console.log(age);

// // // const birthYear = 2004;
// // // console.log(birthYear);

// // // const PI = 3.1415;
// // // console.log(PI);

// // // var job = "programmer";
// // // job = "engineer";
// // // console.log(job);

// // // const country = "Philippines";
// // // const language = "Filipino";
// // // const population = 100000;

// // // age = 25;
// // // age = 21;
// // // console.log(age);

// // // // let firstName = "Sarah";
// // // // let myCurrentJob = "teacher";
// // // // let PI = 3.1415;

// // // console.log("==== DATA TYPES ====");

// // // let id = 12345;
// // // console.log(id);
// // // console.log(typeof id); 


// // // let lastName = "Onggoco";
// // // console.log(lastName);
// // // console.log(typeof lastName);


// // // let javascriptIsFun = true;
// // // console.log(javascriptIsFun);
// // // console.log(typeof javascriptIsFun); 


// // // let year;
// // // console.log(year); 
// // // console.log(typeof year);

// // // let dynamicVariable = 21; 
// // // console.log(dynamicVariable, typeof dynamicVariable);

// // // dynamicVariable = "Now I am a string!";
// // // console.log(dynamicVariable, typeof dynamicVariable);

// // // dynamicVariable = true;
// // // console.log(dynamicVariable, typeof dynamicVariable);


// // console.log("==== MATH OPERATORS ====");

// // const now = 2037;
// // const ageJonas = now - 1991;
// // const ageSarah = now - 2018;
// // console.log(ageJonas, ageSarah);

// // console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// // console.log("Math operations:");
// // console.log("Addition:", 10 + 5); // 15
// // console.log("Subtraction:", 20 - 8); // 12
// // console.log("Multiplication:", 4 * 7); // 28
// // console.log("Division:", 15 / 3); // 5
// // console.log("Exponentiation:", 2 ** 3); // 8

// // //Math with Strings 
// // const firstName = "Ellica";
// // const lastName = "Onggoco";
// // console.log(firstName + " " + lastName); 

// // console.log("Hello " + "World" + "!"); 
// // console.log("I am " + 25 + " years old");
// // console.log("I am " + (20 + 1) + " years old"); 

// // console.log("=== ASSIGNMENT OPERATORS ===");

// // let x = 10 + 5; 
// // console.log("x starts as:", x);

// // x += 10; 
// // console.log("After x += 10:", x);

// // x *= 4; 
// // console.log("After x *= 4:", x);

// // x /= 2; 
// // console.log("After x /= 2:", x);

// // x++; 
// // x++;
// // console.log("After x++:", x); 

// // x--; 
// // x--; 
// // x --;
// // console.log("After x-- twice:", x); 


// // //comparison operators
// // console.log("==== COMPARISON OPERATORS ====");

// // console.log ("Age Comparisons:");
// // console.log(ageJonas > ageSarah);
// // console.log(ageSarah >= 18);
// // console.log(ageJonas < ageSarah);
// // console.log(ageJonas <= 30);

// // console.log("Number Comparisons:");
// // console.log(12 > 3);
// // console.log(12 <3 );
// // console.log(12 >= 12);
// // console.log(12 <= 11);
// // console.log(12 == 12);

// // const isFullAge = ageSarah >= 18;
// // console.log("Sarah is an adult:", isFullAge);

// // console.log("Complex Comparisons:");
// // console.log(now - 1991 > now - 2018);

// // let z, y; 
// // z = y = 25 - 10 - 5;
// // console.log(z, y);

// // const averageAge = (ageJonas + ageSarah) / 2;
// // console.log(ageJonas, ageSarah, averageAge);

// // ////////////////////////////////////
// // // Coding Challenge #1 - BMI Calculator

// // // Test Data 1
// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;

// // // Your code here:
// // // 1. Calculate BMIs
// // // 2. Create markHigherBMI variable
// // // 3. Log results to console

// // //BMI = mass / height ** 2 or BMI = mass / (height * height)


// // const BMIMark = massMark / heightMark ** 2;
// // const BMIJohn = massJohn / (heightJohn * heightJohn);
// // console.log(BMIMark, BMIJohn);
// // const markHigherBMI = (BMIMark > BMIJohn);
// // console.log("Is Mark's BMI higher than John's?", markHigherBMI);

// // console.log(BMIMark);
// // console.log(BMIJohn);
// // console.log(markHigherBMI);

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I am " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// const jonasNew = `I am ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`I am ${2037 - 1991} years old`);
// console.log(`Math works: ${2 + 3} equals five`);
// console.log(`Comparisons too: ${5 > 3}`);


// const age = 21; 
// if (age >= 18) {
//   console.log(`I am old enough to drive!`);
// }  else {
//     const yearsLeft = 18 - age;
//     console.log(`I am too young to drive. Wait another ${yearsLeft} years :)`);
// }

// console.log (Boolean(0));
// console.log (Boolean(undefined));
// console.log (Boolean("Jonas"));
// console.log (Boolean({}));
// console.log (Boolean(""));
// console.log (Boolean(123));

// //Coding Challenge #2 - BMI Comparison

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// }
// else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

const inputYear = "1991";
console.log(Number(inputYear), inputYear); 
console.log(Number(inputYear) + 18); 

console.log(Number("Jonas")); 
console.log(typeof NaN); 

console.log(String(23), 23); 
console.log(typeof String(23)); 


console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3); 
console.log("23" / "2"); 
console.log("23" * "2"); 


let n = "1" + 1; 
n = n - 1; 
console.log(n);

console.log(2 + 3 + 4 + "5"); 
console.log("10" - "4" - "3" - 2 + "5");

console.log("5" + 2); 
console.log("5" - 2); 
console.log("5" * 2); 
console.log("5" / 2); 

const userAge = "25"; 
const userScore = 95; 
console.log(userAge + userScore); 
console.log(Number(userAge) + userScore);
console.log(String(userScore), userScore);
console.log(typeof String(userScore), userScore);
console.log(typeof userAge, userAge);
console.log(typeof Number(userAge), Number(userAge));

const firstNmber = `10`;
const secondNumber = "20";
const num1 = Number(prompt("First number:")); 
const num2 = Number(prompt("Second number:")); 
const sum = num1 + num2; 
console.log(`Sum: ${sum}`);
console.log("Sum: " + sum);

const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (loose)");


console.log("18" === 18); 
console.log("18" == 18); 
console.log(18 === 18);

console.log("0" == 0); 
console.log(0 == false); 
console.log("0" == false); 
console.log(null == undefined);


console.log("" == 0); 
console.log("   " == 0); 


const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");

console.log(5 === "5"); 
console.log(5 == "5"); 
console.log(true === 1); 
console.log(true == 1); 
console.log(false === 0); 
console.log(false == 0); 

const username = prompt("Username:");
const password = prompt("Password:");

if (username === "admin" && password === "1234") {
  console.log("Welcome admin!");
} else {
  console.log("Access denied");
}

const hasDriversLicense = true; 
const hasGoodVision = true; 

console.log(hasDriversLicense && hasGoodVision); 
console.log(hasDriversLicense || hasGoodVision); 
console.log(!hasDriversLicense); 

const isTired = false; 
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
const driverAge = 20;
const hasPermission = true;
const hasExperience = false;

if ((driverAge >= 18 || hasPermission) && hasExperience) {
  console.log("Approved to drive");
} else {
  console.log("Not approved to drive");
}

const playerAge = 21; 
const hasID = true; 
const isVIP = false; 

if ((playerAge >= 21 && hasID) || isVIP) {
  console.log("Welcome to the club!");
} else {
  console.log("Sorry, you cannot enter");
}

const temperature = 25; // Celsius
const isRaining = false;
const isWindy = true;

if (temperature >= 20 && temperature <= 30 && !isRaining && !isWindy) {
  console.log("Perfect day!");
} else if (temperature >= 15 && temperature <= 35 && !isRaining) {
  console.log("Good day!");
} else {
  console.log("Stay inside!");
}

const myAge = 23;

const drink = myAge >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);


let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

const isLoggedIn = true;
let welcomeMessage = isLoggedIn ? "Welcome back!" : "Please sign in";

const isPremium = false;
let price = isPremium ? 100 * 0.8 : 100;

// Coding Challenge #4

const bill = 275;


const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;


console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
