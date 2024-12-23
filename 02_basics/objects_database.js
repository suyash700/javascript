//we will get info through db in array of object format

const arr=
[
    {
        id:'1',
        email:"s@gmail.com"
    },
    {
        id:'2',
        email:"o@gmail.com"
    },
    {
        id:'3',
        email:"p@gmail.com"
    }
]

console.log(arr[1].email);//o@gmail.com

//typeof

const myObj=
{
    name:"suyash",
    age:19,
    isLoggedIn:false,
}
console.log(Object.keys(myObj));
//[ 'name', 'age', 'isLoggedIn' ]

console.log(Object.values(myObj));
[ 'suyash', 19, false ]

console.log(myObj.hasOwnProperty('isLoggedIn'));
//true
//array ke form mein store
