//singleton
//objects.create


//literals

const sym=Symbol("Headboy")
const myObj=
{
    name:"suyash",
    age:19,
    isLoggedIn:false,
    //symbol
    [sym]:"Headboy", //typeof =>symbol
    //as (sym:"Headboy" typeof(sym)=>string )
    
}
/*
we can use dot operator
and [] to access object properties
["key"] and [symbol_name]
*/
console.log(myObj.age);
console.log(myObj["isLoggedIn"]);

console.log(myObj[sym]);

//change values
myObj.age=20;

//if we dont want to change the values =>freeze

Object.freeze(myObj);
//abh change kro nahi hoga
console.log(myObj);
