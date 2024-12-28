/*
1.store body
2.store class 
3.select form bcz it contains final submit button

4.form is submitted by submit button and it gets uploaded to server/url

5.we need to prevent it
6.add.EventListener("submit")
*/
const body = document.querySelector('body');
const classSelected = document.querySelector('.container');
console.log(classSelected);

// console.log(document.querySelector("h1"))
const form = classSelected.querySelector('form');
console.log(form);

//add event
//empty values store
//     const height=document.querySelector("#height")
//     console.log(height)
// console.log(document.querySelector("button"))
form.addEventListener('submit', function (e) {
  e.preventDefault();
  //to get id use =>#
  //to access values from input use =>('#id').value
  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  //isNaN(name) => checks if vlaue is number of NaN
  if (height < 0 || height === '' || isNaN(height)) {
    results.innerHTML = 'Please enter valid height';
  } else if (weight < 0 || weight === '' || isNaN(weight)) {
    results.innerHTML = 'Please enter valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `${bmi}`;
  }
});
