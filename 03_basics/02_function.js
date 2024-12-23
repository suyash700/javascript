function add(...n1)
{
    console.log(n1);
}
add(4,5,6,4,2,4);
//... rest operator

//passing object to function
const user=
{
    username:"SUyash",
    id:"45",
}

function userInfo(anyobject)
{
    console.log(`the username is ${anyobject.username} and id is${anyobject.id}`);
    //the username is SUyash and id is45
}
userInfo(user)
console.log();

function userInfo2(any)
{
    console.log(`the username is ${any.username} and id is ${any.id}`);
    //the username is SUyash and id is45
}

userInfo2(
    {
        id:"200",
        name:"jolly"
    })
    //passing array
function userInfo3(getArray)
    {
        console.log(getArray[1]);
        //the username is SUyash and id is45
    }
  const arr=[1,2,3,4]
 userInfo3(arr)