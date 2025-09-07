// Remember, we're gonna use strict mode in all scripts now!
'use strict';

console.log(' === DEVELOPMENT ENVIROMENT SETUP ===');

const messyExample = function (name, age) {
  if (age >= 18) {
    return `Hello ${name}, you are an adult!`;
  } else {
    return `Hello ${name}, you are a minor!`;
  }
};

console.log('Current messy code example:', messyExample('Ellica', 20));
console.log('Goal: Automatic formatiting, auto refresh, and typing shortcuts!');

////////////////////////////////////
// Extension Installation Test

function testExtensions() {
  const extensionTests = [
    { name: 'Prettier', status: 'installed', purpose: 'code formatting' },
    { name: 'Live Server', status: 'installed', purpose: 'auto refresh' },
    {
      name: 'Auto Rename Tag',
      status: 'installed',
      purpose: 'HTML efficiency',
    },
  ];

  return extensionTests;
}

const extensionStatus = testExtensions();
console.log('Extension installation status:', extensionStatus);

const prettierTest = {
  firstName: 'Ellica',
  lastName: 'Onggoco',
  skills: ['JavaScript', 'HTML', 'CSS', 'Reactjs'],
  isActive: true,
};

const messyFunction = function (x, y, z) {
  if (x > 0 && y > 0) {
    return x + y + z;
  } else {
    return 0;
  }
};

const messyArrow = items => {
  return items.map(item => {
    return item.toUpperCase();
  });
};

console.log(
  'Before Prettier formatting - this code works but looks unprofessional'
);
console.log('Prettier test object:', prettierTest);
console.log('Messy function result:', messyFunction(5, 10, 15));
console.log(
  'Messy arrow function result:',
  messyArrow(['apple', 'banana', 'cherry'])
);

const studentTest = {
  firstName: 'your-name',
  skills: ['HTML', 'CSS', 'JavaScript'],
  experience: 'beginner',
  goals: ['become-developer', 'build-projects'],
};

const testFunc = function (data) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
};

let liveServerTest = 'Initial message - change #1';
console.log('Live Server test message:', liveServerTest);

const timeStamp = new Date().toLocaleTimeString;
const updateCount = 1;

console.log(`Live Server updated at #${updateCount} at ${timeStamp}`);

function showCurrentTime() {
  const now = new Date().toLocaleTimeString();
  console.log('Current time:', now);
  return now;
}

showCurrentTime();

console.log('Testing snippet functionality - cl + Tab created this!');

function testSnippets() {
  console.log('Function created with snippet - func + Tab!');
  return 'Snippets working perfectly!';
}

testSnippets();

const snippetTest = message => {
  console.log(`Arrow function from snippet: ${message}`);
  return message;
};

snippetTest('Snippets save so much typing time!');

////////////////////////////////////
// Environment Setup Verification

console.log('🎉 Professional Development Environment Complete!');
console.log('✅ Prettier: Automatic code formatting');
console.log('✅ Live Server: Automatic browser refresh');
console.log('✅ Snippets: Fast code generation');
console.log('✅ Extensions: Enhanced productivity');
console.log('Ready for professional JavaScript development!');

// Calculate time savings
function calculateTimeSavings() {
  const dailyConsoleLogs = 50;
  const keystrokesSavedPerLog = 11; // 'console.log()' vs 'cl' + Tab
  const dailySavings = dailyConsoleLogs * keystrokesSavedPerLog;
  const monthlySavings = dailySavings * 22; // work days

  console.log(`Daily keystrokes saved: ${dailySavings}`);
  console.log(`Monthly keystrokes saved: ${monthlySavings}`);

  return { daily: dailySavings, monthly: monthlySavings };
}

calculateTimeSavings();
