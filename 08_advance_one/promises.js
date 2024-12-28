/*
const promiseOne=new Promise(call back-function(resolve,reject){

    resolve();//pass values to .then
})

*/

const promiseOne = new Promise(function (resolve, reject) {
  //resolve() upaar ya niche pehle async task he hoga
  setTimeout(function () {
    console.log("Async task is done");
    //we neww to connect .then with resolve
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("promise completed");
});

new Promise(function(resolve,reject)
{
    setTimeout(function()
{
    console.log("Async task 2");
    resolve();
    
},1000)
}).then(function()
{
    console.log("ASync 2 resolved");
    
})

const promiseThree=new Promise(function(resolve,reject)
{
    setTimeout(()=>{

        resolve({'name':'suyas','id':'99'})
    },1000)
})
//{'name':'suyas','id':'99'}  => object is pass to .then function
// suppose user name
promiseThree.then(function(user){
    console.log(user);
    
})

//++++++++++++++  chaining ++++++++++++++++++++

const promiseFour =new Promise(function(resolve,reject)
{
    setTimeout(function()
    {
        let error=false;
        if(!error)
        {
            resolve({'sports':"cricket",'player':"MSD"})
        }else{
            reject('ERROR : SOMETHING WENT WRONG')
        }
       
    },1000)
})

promiseFour.then((user2)=>{
    console.log(user2);
    return user2.player;
//return wala kaha store hoga??
//chaining => useful while handling database
}).then((player)=> //ismein
{
    console.log(player);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    console.log("YEH TOH HOTA HEE HAI");
    
})

const promiseFive =new Promise(function(resolve,reject)
{
    setTimeout(function()
    {
        let error=false;
        if(!error)
        {
            resolve({'height':"172",'weight':"58"})
        }else{
            reject('ERROR : SOMETHING WENT WRONG')
        }
       
    },1000)
})

async function consumefive()
{
    try {
        const response=  await promiseFive
        console.log(response);
        console.log("HELLO p-5");
    } catch (error) {
        console.log(error);
        
    }
 
}
consumefive()



