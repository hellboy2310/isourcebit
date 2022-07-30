// Title: 
// Let i t don't be!

// Meta-Tags:
// Javascript, JS, interview, questions, interview questions, execution context, hoisting ,practice

// Description:
// Find output of the following:

console.log(a);
f(2, 3, 4, 5);

var a = 1;
var a = 2;
console.log(a);
console.log(b);
let b = 2;

function f() {
  console.log(arguments);
}

// Options: 
// A)
// undefined
// [Arguments] { '0': 2, '1': 3, '2': 4, '3': 5 }
// 2
// Error

// B)
// undefined
// [Arguments] { '0': 2, '1': 3, '2': 4, '3': 5 }
// 2
// 2

// C)
// 1
// Error

// D)
// 1
// [Arguments] { '0': 2, '1': 3, '2': 4, '3': 5 }
// 2
// Error