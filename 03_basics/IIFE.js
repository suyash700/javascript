(function chai()
{
    console.log("hello");
    
})();

/* 
IIFE=> immediately invoke function expression
global scope ke pollution se problem hoti hai kai baar
so joh bhi waha pollution hai usse bachne ke liye

*/

((name) => 
{
    console.log(`hello i am ${name}` );
    
})("suya");