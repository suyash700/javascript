console.log(1+"2");
console.log(typeof("1"+2));
console.log();

console.log("1"+2);
console.log(typeof("1"+2));
console.log();

console.log("1"+2+2);
console.log(typeof("1"+2+2));
console.log();

console.log(1+"2"+2);
console.log(typeof(1+"2"+2));
console.log();

console.log(1+2+"2");
console.log(typeof(1+2+"2"));

/*

if string + numbers 
console.log("1"+2+2);   => string mein sabkuch =>122

if numbers + string
console.log(1+2+"2");   =>add then string => (1+2) +"2" => 32
*/

//direct
console.log(true);
console.log(false);
console.log();

// +true => 1 ; +"" empty already known ki 0
console.log(+true);
console.log(+"");

//                              Increment and Decrement operations

/*
 Increment and Decrement operations
 decides value for 2nd operand

*/
let x=2
let y=x++
console.table({x,y})
console.log();

let z=2
let w=++z
console.table({z,w})


