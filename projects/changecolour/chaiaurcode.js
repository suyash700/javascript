//select body
//select buttons
//loop

const Body=document.querySelector("body")

console.log(Body)


//2.select buttons from id/class
const classSelected=document.querySelector(".canvas")
console.log(classSelected)
const buttonSelected=classSelected.querySelectorAll(".button")
console.log(buttonSelected)

//loop through the buttons
buttonSelected.forEach(function(button)
{
console.log(button)
//addEventListener
button.addEventListener("click",function(e)
{
  console.log(e)
  console.log(e.target)
  //event.target gives us info from where event is coming(span)

  //sabkuch mil gaya abh click se final change
  //switch/if-else
  let choice=e.target.id
  // console.log(change)

switch(choice)
{
  case 'grey':
          Body.style.backgroundColor=e.target.id
         break;
  case 'white':
          Body.style.backgroundColor=e.target.id
          break;
  case 'blue':
         Body.style.backgroundColor=e.target.id
         break;
  case 'yellow':
          Body.style.backgroundColor=e.target.id
          break;
  default:
    console.log("please click valid block")
    break;

}
} )
}); 

