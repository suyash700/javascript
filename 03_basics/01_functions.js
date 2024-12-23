function print()
{
    console.log("hello");
    
}
print;// reference not printing
print();//calling

function sum(n1,n2)
{
    return n1+n2
}
sum()//undefined
const ans=sum(3,5)
//console.log(ans);


function isLoggedIn(username)
{
    if(username===undefined)
    {
        console.log("Please enter valid")
        return
    }
    return `${username},just logged in`;
    
    
}

/*
if(!username)  //undefined is considered as false 
*/
const uttar=isLoggedIn("Suyash")
console.log(uttar);

const uttar2=isLoggedIn()
console.log(uttar2);

function isLoggedIn2(username='sam')
{
    if(!username)//agar ye block execute he na karna ho
    {
        console.log("Please enter valid")
        return
    }
    return `${username},just logged in`; 
}
const ans2=isLoggedIn2()
console.log(ans2);


