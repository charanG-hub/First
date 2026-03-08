const API = "http://localhost:3000";

function login(){

const username=document.getElementById("username").value;
const password=document.getElementById("password").value;

fetch(API+"/login",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({username,password})
})
.then(res=>res.json())
.then(data=>{

if(data.success){
window.location="dashboard.html";
}else{
document.getElementById("msg").innerText="Login failed";
}

});

}

function checkBalance(){

fetch(API+"/balance")
.then(res=>res.json())
.then(data=>{
document.getElementById("balance").innerText=data.balance;
});

}

function deposit(){

const amount=document.getElementById("amount").value;

fetch(API+"/deposit",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({amount})
})
.then(res=>res.json())
.then(data=>{
document.getElementById("balance").innerText=data.balance;
});

}

function withdraw(){

const amount=document.getElementById("amount").value;

fetch(API+"/withdraw",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({amount})
})
.then(res=>res.json())
.then(data=>{

if(data.error){
alert(data.error);
}else{
document.getElementById("balance").innerText=data.balance;
}

});

}