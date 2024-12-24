//switch case 

// switch (key) {
//     case value:
        
//       //  break; if no break code will execute till default [ ,default)
//     case value:
        
//         break;

//     default:
//         break;
// }

//truthy falsy

/*
if we already assume that given val is true it is called as truthy
else falsy

*/ 

//""=> false,,,"yes"=>true
const email="s@gm.in"

if (email) {
    console.log("Yes");  
}else{
    console.log("no");
    
}
//falsy
//0,false,null,undefined,NaN,bigInt 0n,-0,""

//truthy
//'0','false',[],{},function(){}

//empty arrays

const arr=[]
if (arr.length==0) console.log("arr is empty");


//empty object

const myObj={}
console.log(Object.keys(myObj));

if (Object.keys(myObj).length===0) {
    console.log("obj is empty");
    
}

/*
false==0 =>true
false=='' =>true
0=='' =>true
*/

//nullish coalescing operator  => ??
//null ?? complex function
let lap,lap2;
lap=null ?? 37
console.log(lap);
lap2=null ?? 445??90
console.log(lap2);//first val assign =>445

//ternary operator
//condition ? true :false

let price=100;
price<=80 ? console.log("less than 80") :console.log("more than 80");
//more than 80





