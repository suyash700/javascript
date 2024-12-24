//for of
const arr=[12,23,45]
for (const element of arr) {
    console.log(element);
    
}

const str="Suyash"
for (const char of str) {
    console.log(char);
    
}

//Maps
/*
unique values
key :value
order maintain
*/
const map=new Map();
map.set('1','India')
map.set('2','Usa')
map.set('3','Australia')

for (const [key,value] of map) {
    console.log(key,":",value);
    
}


//++++++++++++  object iteration for of 
// const myObj=
// {
//     1:"suya",
//     2:"dahi"
// }
// for (const [key,value] of myObj) {
//     console.log(key,":",value);
    
// }//not working 

// forin

const obj=
{
    'js':"javascript",
    'c++':"cpp"
}
for (const key in obj) {
    console.log(`${key} shortcut for ${obj[key]}`);
    
}

//foreach loop

const myarr=[12,2,3,4]

// myarr.forEach(element,index,arr=> {
//     console.log(element,index,arr);
    
// });

myarr.forEach((item) =>  {
    console.log(item);
    
});

//array ke andar objects hai 

const prr=[
    {
        name:"op",
    },
    {
        name:"po"
    }
]

prr.forEach( (item) => {
    console.log(item);
    
}
 )
//function bana ke reference 
 function print(item)
 {
    console.log(item);
    
}
prr.forEach(print)



