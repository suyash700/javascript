let score =33 //confirm integer

//const {marks} =req.body  // front end se value aayi hai dont know exact datatype


//number 
console.log(typeof score );
console.log(typeof(score)); //as method ()
console.log();


//String => ""
let marks ="33";
console.log(typeof marks)
console.log();

//   Conversions problem
//    NaN => Not a number 
let a="33abc"
let b=Number(a)
console.log(typeof b);
console.log(b);
console.log();
console.log();

//null => 0; 
let c=null
let d=Number(c)
console.log(typeof d)
console.log(d);
console.log();

//undefined =>NaN;
let e=undefined
let f=Number(e)
console.log(typeof f);
console.log(f);
console.log();

//boolean 
// true=>1 and false=>0
let g=true
let h=Number(g)
console.log(typeof h);
console.log(h);
console.log();


//String "SUYASH"=>NaN

//boolean
// 1 =>true; 0=>false
//  ""=>false;
// "suuash"=>true
