function multiBy5(num)
{
    return num*5;
}
multiBy5.power=2

// console.log(multiBy5(5));
// console.log(multiBy5.power);
// console.log(multiBy5.prototype);


function createUser(username,id)
{
  //this.username=username;
  //  console.log(this.username);//undefined as username variable is not created

  this.username=username;
  console.log(username);

    
}
createUser("poonam",50)
//we can create function ke bahar method but the method will be of function

createUser.prototype.LastName=function()
{
   console.log(`${this.username},hiiii`);
   
}
const u1=new createUser("suyash",90)
u1.LastName()

myArr=['4','kutta']

const myObj=
{
    1:'suyash',2:'dahi'
}

Object.prototype.hitesh=function(str)
{
    this.str=str
    console.log(`hitesh is in allllll,,${str}`);
}
myObj.hitesh('myObj')
myArr.hitesh('myArr')


//+++++++++++++Prototype Inheritance+++++++++++++++++++++++

//1 object ki props dusra use

const obj1=
{
    name:'suyash',age:'19'
}
const obj2=
{
    email:'suya@123',
    address:'india'
}
const obj3=
{
    isLoggedIn:false
}
//setPrototypeOf(to change,from change)//returns changed thing

Object.setPrototypeOf(obj3,obj2)
Object.setPrototypeOf(obj2,obj1)

console.log(obj3.email);

const str1='suyaa   '
console.log(str1.length);


String.prototype.trueLength=function()
{
    console.log(this.trim().length);
}
str1.trueLength()





