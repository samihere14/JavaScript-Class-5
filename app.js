//  Chapter 14 (If- Statements nested)
//  Q : 01 1. Code an if statement enclosing a nested if. If password is not
//empty, then check if password is not greater than 5 , then display
//an alert that says &quot;Password must be greater than 5&quot; if greater
//than 5 then Alert &quot;OK&quot;.

const password = "1234";
if (password !== "") {
  if (password.length <= 5) {
    alert("Password must be greater than 5");
  } else {
    alert("OK");
  }
}

//Q : 2. Try this statement by yourself if (a === 1) { if (c === &quot;Max&quot;) {
    // alert(&quot;OK&quot;);
    // }
//  }

if (a === 1) { if (c === "Max") {
    alert("OK");
}
}

// 3. Code the first line of an if statement that avoids the nesting above
// by testing for multiple conditions.
// if (a === 1) { if (c
// === &quot;Max&quot;) {
// alert(&quot;OK&quot;);
// }
// }

if (a === 1) {
    if (c === "Max") {
      alert
    }
}

// Chapter 15 (Array I)
// 1. Declare an empty array.

const empArray = [];

// 2. Code an array with 1 string element

const strArray = ["Hello there, This is Muhammad Sami"];

// 3. var alphabet = [&quot;h&quot;,&quot;i&quot;,&quot;j&quot;,&quot;k&quot;]. Now print the letter “j” in alert
// using array index

var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]);

// 4. var alphabet=[&quot;h&quot;,&quot;i&quot;,&quot;j&quot;,&quot;k&quot;, “l”,”m”, “n”, “o”]. Find the total
// length of array.

var alphab = ["h", "i", "j", "k", "l", "m", "n", "o"];
const arrLength = alphab.length;
alert("The length of the array is: " + arrLength);

// Chapter 17 - 20 (for Loops)
// 1. Write a statement in which loop is to run 10 times.
let i = 1;
do {
  i++;
} 
while (i <= 10);

// 2. Code the first line of a for loop with the usual counter name,
// usual starting value, and usual increment. Run it 12 times
// using &lt;= to specify how many loops.

for (let i = 1; i <= 12; i++) {
  }

//   3. What are the 5 characters missing from this code, excluding
//   any spaces that are missing? Type them in order, with no
//   spaces or commas between them.
//   for var i = 0 i &lt;= 4 i++
//   Note: Complete this statement by yourself

for (var i = 0; i <= 4; i++) {
    alert(i);
  }

//   ARRAYS AND LOOP

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

const firArray = arrOfArrays[0];
const secArray = arrOfArrays[1];
const thiArray = arrOfArrays[2];

console.log(firArray);
console.log(secArray);
console.log(thiArray);

// 3. Write a program to print numeric counting from 1 to 10.

for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

//   4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

const tableNumber = prompt("Enter the number to show its multiplication table");
const tableLength = prompt("Enter the length of the table");

for (let i = 1; i <= tableLength; i++) {
  const product = tableNumber * i;
  console.log(`${tableNumber} x ${i} = ${product}`);
}