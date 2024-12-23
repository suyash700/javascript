//push =>combines two array return new length of orginal array

//combining to array 2nd array is taken as single value


const t1=["vk","ms","rs"];
const t2=["st","vc"];
        //           0    1      2   3->[3][0] [3][1]
t1.push(t2);//=> [ 'vk', 'ms', 'rs', [ 'st'   , 'vc' ] ]
console.log(t1);
console.log(t1[3][0]);// =>st

//concat => combines 2 array and return new array
//so make sure to store it in new variable

const t3=["vk","ms","rs"];
const t4=["st","vc"];
const tnew=t3.concat(t4)

console.log(tnew); //=> [ 'vk', 'ms', 'rs', 'st', 'vc' ]

//spread operand => ...name
//same as concate but can combine 2 or more arrays 

const myteam=[...t3,...t4]
console.log(myteam);//[ 'vk', 'ms', 'rs', 'st', 'vc' ]

//flat =>nested ko alag karna hai

const a1=[1,2,[3,4],[5,[6,7]]];
const Flatted=a1.flat(Infinity)
console.log(Flatted);
 //[
//     1, 2, 3, 4,
//     5, 6, 7
//   ]


//Data scrapping
/*
to convert a data to array format

if we take data from a site 
suppose we have data in string,nodelist,object format
*/

//from 

const name="suyash"
console.log(Array.isArray(name));//false

console.log(Array.from(name));
//[ 's', 'u', 'y', 'a', 's', 'h' ]

console.log(Array.from({naam:"suya"}));//[]
//we shall declare it initially that kis chiz ka array banana hai keys/values

//of
//returns a new array
const p1=100
const p2=200
const p3=300
const ofArray=Array.of(p1,p2,p3)
console.log(ofArray);





