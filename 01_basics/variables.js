//        1.creating variables
const accountId=12345
//values of const cannot be changed

let accName="SUYASH"

var accPass="999"

address="MAnchar"

console.table({accountId,accName,accPass})

//         2.Changing values

//values of const cannot be changed
accName="DAHITULE"
accPass="333"
address="Alandi"


console.table({accName,accPass,accPass,address})

/*
Prefer not to use var keyword for declaring variables
as block and functional scope issue is present

*/


//       3.Initialsing a variable,not declaring  => undefined
let accState;
console.log(accState)