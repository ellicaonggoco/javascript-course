// // Remember, we're gonna use strict mode in all scripts now!
// 'use strict';

// console.log(' === DEVELOPMENT ENVIROMENT SETUP ===');

// const messyExample = function (name, age) {
//   if (age >= 18) {
//     return `Hello ${name}, you are an adult!`;
//   } else {
//     return `Hello ${name}, you are a minor!`;
//   }
// };

// console.log('Current messy code example:', messyExample('Ellica', 20));
// console.log('Goal: Automatic formatiting, auto refresh, and typing shortcuts!');

// ////////////////////////////////////
// // Extension Installation Test

// function testExtensions() {
//   const extensionTests = [
//     { name: 'Prettier', status: 'installed', purpose: 'code formatting' },
//     { name: 'Live Server', status: 'installed', purpose: 'auto refresh' },
//     {
//       name: 'Auto Rename Tag',
//       status: 'installed',
//       purpose: 'HTML efficiency',
//     },
//   ];

//   return extensionTests;
// }

// const extensionStatus = testExtensions();
// console.log('Extension installation status:', extensionStatus);

// const prettierTest = {
//   firstName: 'Ellica',
//   lastName: 'Onggoco',
//   skills: ['JavaScript', 'HTML', 'CSS', 'Reactjs'],
//   isActive: true,
// };

// const messyFunction = function (x, y, z) {
//   if (x > 0 && y > 0) {
//     return x + y + z;
//   } else {
//     return 0;
//   }
// };

// const messyArrow = items => {
//   return items.map(item => {
//     return item.toUpperCase();
//   });
// };

// console.log(
//   'Before Prettier formatting - this code works but looks unprofessional'
// );
// console.log('Prettier test object:', prettierTest);
// console.log('Messy function result:', messyFunction(5, 10, 15));
// console.log(
//   'Messy arrow function result:',
//   messyArrow(['apple', 'banana', 'cherry'])
// );

// const studentTest = {
//   firstName: 'your-name',
//   skills: ['HTML', 'CSS', 'JavaScript'],
//   experience: 'beginner',
//   goals: ['become-developer', 'build-projects'],
// };

// const testFunc = function (data) {
//   for (let i = 0; i < data.length; i++) {
//     console.log(data[i]);
//   }
// };

// let liveServerTest = 'Initial message - change #1';
// console.log('Live Server test message:', liveServerTest);

// const timeStamp = new Date().toLocaleTimeString;
// const updateCount = 1;

// console.log(`Live Server updated at #${updateCount} at ${timeStamp}`);

// function showCurrentTime() {
//   const now = new Date().toLocaleTimeString();
//   console.log('Current time:', now);
//   return now;
// }

// showCurrentTime();

// console.log('Testing snippet functionality - cl + Tab created this!');

// function testSnippets() {
//   console.log('Function created with snippet - func + Tab!');
//   return 'Snippets working perfectly!';
// }

// testSnippets();

// const snippetTest = message => {
//   console.log(`Arrow function from snippet: ${message}`);
//   return message;
// };

// snippetTest('Snippets save so much typing time!');

// ////////////////////////////////////
// // Environment Setup Verification

// console.log('🎉 Professional Development Environment Complete!');
// console.log('✅ Prettier: Automatic code formatting');
// console.log('✅ Live Server: Automatic browser refresh');
// console.log('✅ Snippets: Fast code generation');
// console.log('✅ Extensions: Enhanced productivity');
// console.log('Ready for professional JavaScript development!');

// // Calculate time savings
// function calculateTimeSavings() {
//   const dailyConsoleLogs = 50;
//   const keystrokesSavedPerLog = 11; // 'console.log()' vs 'cl' + Tab
//   const dailySavings = dailyConsoleLogs * keystrokesSavedPerLog;
//   const monthlySavings = dailySavings * 22; // work days

//   console.log(`Daily keystrokes saved: ${dailySavings}`);
//   console.log(`Monthly keystrokes saved: ${monthlySavings}`);

//   return { daily: dailySavings, monthly: monthlySavings };
// }

// calculateTimeSavings();

console.log('=== HOUR 2: DEVELOPER MINDSET & PROBLEM SOLVING ===');
console.log(
  'Key insight: Professional developers think systematically, not just code'
);
console.log(
  'Goal: Transform from beginner to professional problem-solver YASS!'
);

console.log('4-Step Framework: Understand → Divide → Research → Implement');

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const temperature = [3, -2, -10, -1, 'error', 9, 13, 20, 15, 14, 9, 5];
const amplitude = calcTempAmplitude(temperature);
console.log(amplitude);

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const array1 = [8, 5, 1];
const array2 = [1, 0, 5];
const amplitudeNew = calcTempAmplitudeNew(array1, array2);
console.log(amplitudeNew);

console.log(
  'Problem-solving framework applied successfully to extended challenge!'
);
