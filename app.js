console.log("app.js running");


function submitFun()
{
    if(typeof(Storage) !=='undefined')
    {
    var myname = document.getElementById("firstname").value;
   
    if(myname== ""){
        alert("empty");
        return false;
              }
    else{
       
        console.log("Welcome "+myname);
        }
    }
    else{
        console.log("not supported browser")
    }
}