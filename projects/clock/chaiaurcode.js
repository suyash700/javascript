const clockID = document.getElementById('clock');
console.log(clockID);
// const clock=document.querySelector("#clock")
// console.log(clock)

setInterval(function () {
  let date = new Date();
  clockID.innerText = `${date}`;
  //  clockID.appendChild(document.createTextNode(`${date}`))
}, 1000);

/*
const clockID=document.getElementById('direct_id_name')
console.log(clockID)
const clock=document.querySelector("#_id_name")
console.log(clock)

same value

clockID.innerText=`${date}`
usmein he update
clockID.appendChild(document.createTextNode(`${date}`))
niche append

*/
