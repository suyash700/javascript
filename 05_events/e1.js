document.getElementById('owl').addEventListener('click',function()
{
    alert("owl clicked pop up")
},false)//default=>false,,,,,true=>capturing outside to inside)

//event propagation
//event bubling=>inside to outside
 


//++++++++++++++++++++++++===================
document.getElementById('images').addEventListener('click',function(e)
{
    console.log("clicked ul(all images)");
    
})

//all images ke andar 
document.getElementById('owl').addEventListener('click',function(e)
{
    e.stopPropagation();//=>no bubling or capturing
    console.log("clicked ul(all images)");
    
})
//suppose i want to prevent link opening/photo se site 

document.getElementById('google').addEventListener('click',function(e)
{
    e.preventDefault();
    console.log("clicked google");
    
})

//+++++++++++++
//if there are multiple images or multiple things in
// "ul"=>

    //remove images by clicking
  document.querySelector("#id").addEventListener('click',function(e)
{
    console.log(e.target);//event kaha se aa raha hai(event location)

    console.log(e.target.parentNode);//pura <li></li> delete 
    let removeIt=e.target.parentNode

    removeIt.remove();


    
})







//type,timestamp,defaultPrevented,
//target,toElement,srcElement,currentTarget,clientX,Y,screenX,y
//altkey,ctrlkey,shiftkey,keyCode

//projects
//keyboard speed
