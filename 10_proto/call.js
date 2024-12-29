function details(username,email,age)
{
    //aise nahi hoga
 //   setDetails(username)
 // .call(this,__) => holds reference 
 //jab setDetails work ho jayega
 //uska exection context will be removed 
 //vairaibles bhi gayab
 //usko bachane ke liye
 
     setDetails.call(this,username)
    this.email=email;
    this.age=age
}

function setDetails(username)
{
    this.username=username
}

const user1=new details('suyas','123@.com','19')
console.log(user1);

