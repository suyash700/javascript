// string interpolation
//  ``  backticks
// create placeholders

// ${variable_name}
const name='Suyash'
const age =19

console.log(`Hello my name is ${name} and my age is ${age}`);

//we can use methods ${}

//console.log(${name,toUpperCase});

const getName=new String("suyash")
//object invoke
//key value pair
/* Methods use kr sakhte
0:"s"
1:"u"
...
*/ 

console.log(getName[0]);//=>s

console.log(getName.__proto__);
// => {}object

console.log(getName.length);
console.log(getName.toUpperCase());
//original string didnot change

console.log(getName.charAt(2));
//.indexOf('s')=0

const newString=getName.substring(1,5)
console.log(newString);


const hpp=getName.slice(-4,4)//negative indexing
console.log(hpp);

const apple="  chintu     "
console.log(apple);
console.log(apple.trim());//remove spaces to store it in database

const url="https://suyash.com/suyash%20dahitule"//space to %20

console.log(url.replace('%20','-'))//copy of original string
console.log(url);


/*

Note that all comparison operators, including === and ==, compare strings case-sensitively. A common way to compare strings case-insensitively is to convert both to the same case (upper or lower) before comparing them.
*/

// console.log(url.split('-',3));
