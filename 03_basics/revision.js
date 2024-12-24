//object ko

const myObj=
{
    '1':"suyash",
    '2':"poonam"
}
// for (const key of myObj) {
//     console.log(key);
    
// } 

for (const key in myObj) {
    console.log(`the key is ${key}`); 
}
console.log();
for (const [key,value] in myObj) {
    console.log(`the key  is ${key} and value is ${myObj[key]}`); 
}
/*
the key  is 1 and value is suyash
the key  is 2 and value is poonam
 */
console.log();


/*
1.Objects:
cannot use for of
 */

const myarr=[1,2,3]

myarr.forEach( (item,index,arr)=> 
{
    console.log(item,index,arr);
}
)
/*
1 0 [ 1, 2, 3 ]
2 1 [ 1, 2, 3 ]
3 2 [ 1, 2, 3 ]
*/
console.log();
function print(item)
{
    console.log(item);
    
}
myarr.forEach(print)



const trr=
[
    {
        'op': 'pooo'
    },
    {'op':'looooo'}
]
trr.forEach()