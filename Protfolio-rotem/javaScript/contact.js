 function isValidInfo(){
const firstName=document.getElementById("name");
const email=document.getElementById("email");
const number= document.getElementById("phone");
const emailrejex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/



const isFirstNameInValid=firstName.value.length<2;
const isEmailInValid=!emailrejex.test(email.value);
const isPhoneInValid=number.value.length<6;
if(isFirstNameInValid){
    alert("Enter Your Full Name")
}
else if(isEmailInValid){
    alert("Enter Valid Email Address")
}
else if(isPhoneInValid){
    alert("Enter Valid Phone Number")
}
if(!isFirstNameInValid&&!isEmailInValid&&!isPhoneInValid){
   
    console.log(firstName.value,email.value,number.value)
const user={firstName:firstName.value,email:email.value,phone:number.value}
localStorage.setItem("userInfo",JSON.stringify(user))
window.location.href='./thankU.html'
}

 }
const submitBtn=document.getElementById("submit-btn");

submitBtn.addEventListener("click",function(){
    isValidInfo();
   
})

document.getElementById("form1").addEventListener("submit", function(event) {
  event.preventDefault(); 
});


//alert("hello")