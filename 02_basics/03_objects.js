//singleton
//const obj1=new Object();

const obj2={};

obj2.email="SuyashD@gmail.com"
obj2.id="123abc"
console.log(obj2);
//{ email: 'SuyashD@gmail.com', id: '123abc' }

//++++++++++++++++++++++++++++++++++
//nested objectss

const company=
{
    email:"suyashd@gmail.com",
    fullname:
    {
        userfullname:
        {
            firstName:"suyash",
            lastName:"dahitule",
        }
    }
}

console.log(company.fullname);
//{ userfullname: { firstName: 'suyash', lastName: 'dahitule' } }
console.log();
console.log(company.fullname.userfullname.firstName);


//++++++++++++++++++++++++++++++++++
//combine objects

const m1={1:"a",2:"b"}
const m2={3:"a",4:"b"}
const m3={5:"a",6:"b"}

//array ki tarah
const m4={m1,m2,m3}
console.log(m4);

/*
{
  m1: { '1': 'a', '2': 'b' },
  m2: { '3': 'a', '4': 'b' },
  m3: { '5': 'a', '6': 'b' }
}
*/

//Using Object
/*assign =>Returns an Object
                    target,source
const m5=Object.assign({},m1,m2,m3)

*/
const m5=Object.assign({},m1,m2,m3)
console.log(m5);

/*
{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
*/

//spread
const m6={...m1,...m2}
console.log(m6);
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


