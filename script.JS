function validationId(){
let check= document.getElementById("id").value;
let numbers = /^[0-9]+$/;
let min = 5;
let max = 12;
let msg="Id should be between 5 and 12 Characters and must contain only numbers"

if(check.length>= (min) && check.length<= (max) &&check.match(numbers)){
    alert("ID is According to Rules");

}
else{
     checked = document.getElementById("iderror").innerHTML = msg;
     alert("Id Should be According to Rules");
}
}
function validationPass(){
    let checks = document.getElementById("password").value;
    let mi=7;
    let ma=12;
    let msg="Password should be between 7 and 12 Characters"
    if(checks.length>= mi && checks.length<= ma){
     alert("Password is According to Rules")
    }
    else{
        checksd = document.getElementById("passerror").innerHTML = msg;
        alert("Please Write Password According to Rules")
    }
}
function validationName(){
    let checke =document.getElementById("name").value;
    let alphabets = /^[A-Za-z]+$/
    let msg="Name must contain only Alphabets"
    if(checke.match(alphabets)){
        alert("You got a Quite Nice Name Buddy");
    }
    else{
        checkes = document.getElementById("naerror").innerHTML = msg;
    }
}
function validationZip(){
    let checkz = document.getElementById("code").value;
     let numbers = /^[0-9]+$/;
     let max=6;
     masg="Code must contain only numbers"
     if(checkz.match(numbers)&&checkz.length<= max){
         alert("ZIP Code is According To Rules");

     }else{
         document.getElementById("ziperror").innerHTML =masg;
     }
}


