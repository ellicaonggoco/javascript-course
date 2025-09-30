let age = 30;

let oldAge = age;

age = 31;

console.log(`age`, age);
console.log(`oldAge`, oldAge);

const me = {
  name: 'Chester',
  age: 22,
};

const friend = me;
friend.name = 'Ellica';
friend.age = 21;

console.log(`me`, me);
console.log(`friend`, friend);

const orignal = {
  name: 'Jesse',
  age: 24,
  hobbies: ['reading', 'coding'],
};

const shallowCopy = { ...orignal };

shallowCopy.name = 'Bob';

console.log(`orignal name:`, orignal);
console.log(`copy name:`, shallowCopy);

shallowCopy.hobbies.push('basketball');

console.log(`orignal hobbies:`, orignal);
console.log(`copy hobbies:`, shallowCopy);

const deepOrignal = {
  name: 'Charlie',
  age: 32,
  // nested object
  address: { city: 'Paris', country: 'France' },
  // nested array
  hobbies: ['traveling', 'photography'],
};

const deepCopy = structuredClone(deepOrignal);

deepCopy.address.city = 'London';
deepCopy.hobbies.push('cooking');
deepCopy.name = 'Lex';

console.log(`deepOrignal`, deepOrignal);
console.log(`deepCopy`, deepCopy);
