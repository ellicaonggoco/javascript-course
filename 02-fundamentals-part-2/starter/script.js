// // // // console.log("Part 2 function is ready. ");

// // // // console.log (" ==== FUNCTIONS ==== ");
// // // // function logger() {
// // // //     console.log("My name is Ellica ");
// // // // }
// // // // function logger2() {
// // // //     console.log("Your name is Chester ");
// // // // }

// // // // logger();
// // // // logger2();

// // // // function fruitProcessor(apples, oranges) {
// // // //    console.log(apples, oranges);
// // // //    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
// // // //    return juice;
// // // // }

// // // // console.log(fruitProcessor(21, 19));

// // // // const juice1 = fruitProcessor(5,0);
// // // // const juice2 = fruitProcessor(24,2);
// // // // const juice3 = fruitProcessor(54,5);
// // // // const juice4 = fruitProcessor(53,3);

// // // // console.log(fruitProcessor(juice3));

// // // // //Function Expression
// // // // const calcAge = function (birthYear) {
// // // //     return 2025 - birthYear; 
// // // // };

// // // // const age1 = calcAge(2004); 
// // // // const age2 = calcAge(2001);

// // // // console.log(age1);
// // // // console.log(age2);
// // // // console.log(calcAge(2005));

// // // // function introduce(firstName, lastName, age) {
// // // //     const introduction = `Hi Im ${firstName} ${lastName} and Im ${age} years old. `;
// // // //     return introduction;
// // // // }

// // // // console.log(introduce("Chester", "Garcia", 22));
// // // // console.log(introduce("Chester"));

// // // // function yearsUntilRetirement (birthYear, firstName) {
// // // //     const age = calcAge(birthYear);
// // // //     const retirement = 65 - age;

// // // //     if (retirement > 0 ) {
// // // //         return `${firstName} retires in ${retirement} years`;
// // // //     }else{
// // // //         return `${firstName} has already retired`;
// // // //     }
// // // // }

// // // // console.log(yearsUntilRetirement(2003, "Chester"));


// // // // //function scope
// // // // const globalVar = `I am global`;
// // // // const localVar = `I am local`; 

// // // // function testScope() {
// // // //     const localVar = `I am local`;
// // // //     console.log(global);
// // // //     console.log(globalVar);
// // // // }

// // // // testScope();
// // // // console.log(globalVar);
// // // // console.log(localVar);

// // // // ////////////////////////////////////
// // // // // Coding Challenge #1

// // // // // Function to calculate average of 3 scores
// // // // function calcAverage(score1, score2, score3) {
// // // //   return (score1 + score2 + score3) / 3;
// // // // }

// // // // // Function to check winner
// // // // function checkWinner(avgDolphins, avgKoalas) {
// // // //   if (avgDolphins >= 2 * avgKoalas) {
// // // //     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
// // // //   } else if (avgKoalas >= 2 * avgDolphins) {
// // // //     return ` Koalas win (${avgKoalas} vs. ${avgDolphins})`;
// // // //   } else {
// // // //     return `No team wins. (Dolphins: ${avgDolphins}, Koalas: ${avgKoalas})`;
// // // //   }
// // // // }

// // // // // Test Data 1
// // // // let scoreDolphins = calcAverage(44, 23, 71);
// // // // let scoreKoalas = calcAverage(65, 54, 49);
// // // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // // Test Data 2
// // // // scoreDolphins = calcAverage(85, 54, 41);
// // // // scoreKoalas = calcAverage(23, 34, 27);
// // // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // ////////////////////////////////////

// // // // const grades = [85, 92, 78, 96, 88];
// // // // console.log(grades);

// // // // const friends = [`Herzsel`,`Ellica`,`Rafael`];
// // // // console.log(friends);

// // // // const mixed = [`Herzsel`, 13, true, friends];
// // // // console.log(mixed);

// // // // const years = new Array(2001, 2002, 2003, 2004);
// // // // console.log(years);

// // // // //Access Array Elements
// // // // console.log(friends[0]);
// // // // console.log(friends[1]);
// // // // console.log(friends[2]);
// // // // console.log(friends[4]); 

// // // // //access the length
// // // // console.log(friends.length);

// // // // //Change scenario   
// // // // friends[0] = `Rasc`; 
// // // // console.log(friends);

// // // // const calcAge = function (birthYear) {
// // // //     return 2025 - birthYear;
// // // // }

// // // // const age = [calcAge(2004), calcAge(1992), calcAge(2002)];
// // // // console.log(age);

// // // // //add to the last
// // // // const newLength = friends.push("John");
// // // // console.log(friends);
// // // // console.log(newLength);
// // // // //add to the first
// // // // friends.unshift("Neil");
// // // // console.log(friends);
// // // // //removes the last
// // // // const popped = friends.pop();
// // // // console.log(popped);
// // // // console.log(friends);
// // // // //removes the first
// // // // const shifted = friends.shift();
// // // // console.log(shifted);
// // // // console.log(friends);

// // // // console.log(friends.indexOf("Rasc"));
// // // // console.log(friends.indexOf("Ellica"));
// // // // console.log(friends.indexOf("Herzsel"));

// // // // console.log(friends.includes("Ellica"));
// // // // console.log(friends.includes("Herzsel"));
// // // // console.log(friends.includes("Rasc"));

// // // // // Method	Purpose	Returns
// // // // // push()	Add to end	New length
// // // // // pop()	Remove from end	Removed element
// // // // // unshift()	Add to beginning	New length
// // // // // shift()	Remove from beginning	Removed element
// // // // // indexOf()	Find element position	Index or -1
// // // // // includes()	Check if exists	true or false


// // // // //Practice Array Methods

// // // // // Practice array methods:
// // // // // 1. Start with array: ['apple', 'banana']
// // // // // 2. Add 'orange' to the end
// // // // // 3. Add 'grape' to the beginning
// // // // // 4. Remove the last element
// // // // // 5. Check if 'banana' is in the array
// // // // // 6. Find the index of 'grape'
// // // // // 7. Log the final array and all results

// // // // let fruits = ["apple", "banana"];
// // // // fruits.push("orange");
// // // // console.log(fruits);

// // // // fruits.unshift("grapes"); 
// // // // console.log(fruits);

// // // // // Expected progression:
// // // // // After push: ['apple', 'banana', 'orange']
// // // // // After unshift: ['grape', 'apple', 'banana', 'orange']
// // // // // After pop: ['grape', 'apple', 'banana']
// // // // // includes('banana'): true
// // // // // indexOf('grape'): 0

// // // // for (let i = 0; i < friends.length; i++) {
// // // //     console.log(friends[i]);
// // // // }
    
// // // // friends.forEach (function (friend, index) {
// // // // console.log(`${index +1 }: ${friend}`); 
// // // //     });

// // // //     friends.forEach ((friend, index) => {
// // // //         console.log(`${index + 1}:  ${friend}`);
// // // //     });
 
// // // //     //Practice example
// // // //     const grades2 = [85, 92, 78, 96, 88, 74];
// // // //     let total = 0; 
    
// // // //     for (let i = 0; i < grades2.length; i++) {
// // // //        total += grades2[i];
// // // //     }

// // // //     const average = total / grades2.length;
// // // //     console.log (`Average grade: ${average.toFixed(2)}`);

// // // //     let passedCount = 0;
// // // //     grades2.forEach((grade) => {
// // // //         if (grade >= 70) passedCount++;
// // // //     });

// // // //     console.log(`${passedCount} out of ${grades2.length} students have passed`);


// // //  ////////////////////////////////////
// // // // Coding Challenge #2 - Student Grade Manager

// // // const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // // // Function to calculate average
// // // function calculateAverage(grades) {
// // //   let sum = 0;
// // //   for (let grade of grades) {
// // //     sum += grade;
// // //   }
// // //     return sum / grades.length; 
// // // }

// // // // Function to find highest grade
// // // function findHighestGrade(grades) {
// // //   let highest = grades[0];
// // //   for (let grade of grades) {
// // //     if (grade > highest) {
// // //       highest = grade;
// // //     }
// // //   }
// // //   return highest;
// // // }


// // // // Function to find lowest grade
// // // function findLowestGrade(grades) {
// // //   let lowest = grades [0]; 
// // //   for (let grade of grades) {
// // //     if (grade < lowest); {
// // //         lowest = grade;
// // //     }
// // //   }
// // //   return lowest; 
// // // }

// // // // Function to count passing students
// // // function countPassing(grades, passingGrade) {
// // //   let count = 0; 
// // //   for (let grade of grades) {
// // //     if (grade >= passingGrade) {
// // //         count++;
// // //     }
// // //   }
// // //   return count;
// // // }

// // // // Generate complete report
// // // const average = calculateAverage(grades);
// // // const highest = findHighestGrade(grades);
// // // const lowest = findLowestGrade(grades);
// // // const passing = countPassing(grades, 70);

// // // console.log("=== GRADE REPORT ===");
// // // console.log(`Average: ${average.toFixed(2)}`);
// // // console.log(`Highest: ${highest}`);
// // // console.log(`Lowest: ${lowest}`);
// // // console.log(`Passing students: ${passing} out of ${grades.length}`);

// // ////////////////////////////////////
// // // const jonas = {
// // const jonasImproved = {
// //   firstName: "Jonas", 
// //   lastName: "Schmedtmann", 
// //   birthYear: 2004, 
// //   job: "teacher", 
// //   friends: ["Michael", "Peter", "Steven"], 
// //   hasDriversLicense: true,

// // //   calcAge: function(birthYear) {
// // //     return 2025 - birthYear;
// // calcAge: function() {
// //     this.age = 2025 - this.birthYear;
// //     return this.age;
// //     // console.log(this);
// //     // return 2025 - this.birthYear;
// //     // console.log(this);
// //     // return 2025 - this.birthYear;
// //   },
// //   getSummary: function() {
// //     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? `a` : `no`} driver's license.`;
// //   }

// // };
// // // console.log(jonas.calcAge(2004));
// // // console.log(jonasImproved.calcAge());
// // console.log(jonasImproved.calcAge());
// // console.log(jonasImproved.age);
// // console.log(jonasImproved.getSummary());

// // ////////////////////////////////////
// // // Coding Challenge #3 - User Profile System

// // const user = {
// //   firstName: "Sarah",
// //   lastName: "Johnson",
// //   birthYear: 2004,
// //   location: "New York",
// //   interests: ["basketball", "gaming", "eating"],
// //   friends: [
// //     { name: "Michael", status: "active" },
// //     { name: "Emma", status: "inactive" },
// //     { name: "David", status: "active" },
// //   ],
// //   isActive: true,

// //   // Calculate age method
// //   calcAge: function () {
// //     // Calculate age and store as this.age
// //     // Hint: Use new Date().getFullYear() for current year
// //     // Your code here
// //     const currentYear = new Date().getFullYear();
// //     this.age = currentYear - this.birthYear;
// //     return this.age;
// //   },

// //   // Add friend method
// //   addFriend: function (name, status = "active") {
// //     // Add new friend object to this.friends array
// //     // Return the new length of friends array
// //     // Your code here
// //     this.friends.push({name: name, status: status});
// //     return this.friends.length;
// //   },

// //   // Get active friends count
// //   getActiveFriends: function () {
// //     // Filter friends array to count only active friends
// //     // Hint: use this.friends.filter()
// //     // Your code here
// //   return this.friends.filter(friend => friend.status === "active").length;
// // },

// //   // Toggle active status
// //   toggleStatus: function () {
// //     // Switch this.isActive between true and false
// //     // Return the new status
// //     // Your code here
// //     this.isActive = !this.isActive;
// //     return this.isActive;
// //   },

// //   // Generate profile summary
// //   getSummary: function () {
// //     // Create a social media style profile summary
// //     // Include: name, age, location, status, friend counts, interests
// //     // Use template literals for nice formatting
// //     // Your code here
// //     this.calcAge();
// //     return `${this.firstName} ${this.lastName}, 
// //     age ${this.age}, 
// //     from ${this.location}. 
// //     Status: ${this.isActive ? "Active" : "Inactive"}. 
// //     Interests: ${this.interests.join(", ")}. 
// //     Friends: ${this.friends.length} 
// //     (Active: ${this.getActiveFriends()})`;
// //   },
// // };

// // // Test your user profile system
// // console.log(user.getSummary());
// // user.addFriend("Alex", "active");
// // user.toggleStatus();
// // console.log(`\nAfter updates:`);
// // console.log(user.getSummary());

// ////////////////////////////////////

// //1st method
// // querySelector - uses css selectors 

// const message = document.querySelector(`.message`);
//     console.log(message);

//     const button = document.querySelector("#btn");
//     console.log(button);

//     const heading = document.querySelector("h1");
//     console.log(heading);
//     //query selector only selects the first element that matches the selector
   
//     console.log(message.textContent);
//     console.log(button.id);
//     console.log(heading.tagName);
//     console.log(heading.textContent);

//     //get element by ID

//     const buttonById = document.getElementById("btn");
//     console.log(buttonById);
//     console.log(buttonById === button);

//     //querySelectorAll - selects all elements that matches the selector
//     const allParagraphs = document.querySelectorAll("p");
//     console.log(allParagraphs);
//     console.log (allParagraphs[0]);
//     console.log (allParagraphs[1]);
//     console.log (allParagraphs[2]);

/////////////////////////////////
// Modifying Element Content 

const message = document.querySelector(`.message`);

//text content 
console.log(message.textContent);
message.textContent = `Hello From JavaScript!`;
console.log(message.textContent);

//inner html method 
message.innerHTML = `<strong>Bold text from JS!</strong>`;

//inner Text method
console.log (message.innerText);

//Input Element Values
const input = document.querySelector(".guess");

console.log(input.value);
input.value = "Default Text";

const heading = document.querySelector("h1");
heading.style.color ="red";
heading.style.backgroundColor = "black";
heading.style.fontSize = "3rem";

const button = document.querySelector("#btn");
button.style.padding = `20px`;
button.style.borderRadius = `10px`;
button.style.color = `red`;
button.style.backgroundColor = `black`;

//Event Listener = user interactions

button.addEventListener(`click`, function() {
    console.log("Button was clicked");
    message.textContent = `You clicked the button!`;
    message.style.color = `green`;

});

let clickCount = 0;
button.addEventListener("click", function() {
clickCount++;
button.textContent = `Clicked ${clickCount} times`;
button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
}) ;

//input events
const display = document.querySelector (".message");

input.addEventListener(`input`, function() {
const userText = input.value;
display.textContent = `You typed ${ userText}`;
display.style.fontSize = `${userText.length + 10}px`;
display.style.color = `hsl(${userText.length * 20}, 70%, 50%)`;
if (userText.length > 50) {
    display.textContent = `TAMAAA NA JO!`;
    display.style.color = `red`;
    if (userText.length > 70) {
        display.textContent = `PAGOD NA PAGOD NA PAGOD NA PAGOD NA AKO!`;
    }
}
});


//keyboard events = responds to specific keys
input.addEventListener("keydown", function(event) {
console.log(`Key pressed ${event.key}`);

if(event.key === `Enter`)  {
    display.textContent = `You pressed Enter! and the text you typed was ${input.value}.`;
    input.value = ``;
}
});