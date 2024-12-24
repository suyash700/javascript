let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ans = arr.filter((num) => {
  return num > 4; //
});
console.log(ans); //[ 5, 6, 7, 8, 9, 10 ]

//{ }scope open kiya matlab return krna padega

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let mybook=books.filter( (bk) => {return bk.edition<2010 } )
// console.log(mybook);
mybook=books.filter( (bk)=> {return bk.genre==='Fiction'
} )
// console.log(mybook);

mybook=books.filter( (bk) => {return bk.edition<2010 && bk.genre==='History' } )
console.log(mybook);

//filter joh true wohi pass 

//map
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//chaining
let ans1=arr.map( (num) => (num*10))
            .map( (num)=> (num+1))
            .filter((num)=>num>50)
   console.log(ans1);
let ans2=arr.map((num) => num+2 )
console.log(ans2);

//reduce method

let arr1 = [1, 2, 3 ];

let ans3=arr1.map( function (accum,currval) {
    console.log(`acc is ${accum} and currval is ${currval}`);
    return accum+currval;
} ,0)
console.log(ans3);// [ 1, 3, 5 ]
