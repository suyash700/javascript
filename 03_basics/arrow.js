console.log(this);//{} =>empty obj node environment mein
/*if we perform this operation on browser 
windows is the answer as it is global for browser
*/
const myObj=
{
    id:99,
    val:function()
    {
        console.log(this.id);//current context ke baare mein batata   
    }

}
console.log(myObj.val);

function fun()
{
    console.log(this);
    
}
fun()

//+++++++++++++++++++++++ARROW FUNCTION++++++++++++++++++++

const mern=() =>
{
    console.log("Arrow is used ");
    
}
mern()

//implicit return

const fun2 = (n1,n2) => n1+n2

console.log(fun2(8,9));

//const fun3= (n1,n2) => (n1+n2) return an object
const fun3 = () => ({gang:"Suya"})
console.log(fun3());
