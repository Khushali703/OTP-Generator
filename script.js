
let otpMsg = document.querySelector("#otpMsg");
let btn = document.querySelector(".btn");
let btn2 = document.querySelector(".btn2");
 

//global variable
let OTP = "";
function generateOtp() {
    OTP = Math.floor (Math.random() * 10 )+""+ //concat the each number into otp
                Math.floor (Math.random() * 10 )+""+
                Math.floor (Math.random() * 10 )+""+
                 Math.floor (Math.random() * 10 )+""+
                 Math.floor (Math.random() * 10 )+""+
                 Math.floor (Math.random() * 10 );
    
    alert("Your otp is generated successfully !"); // create the get otp alert
    otpMsg.innerText = OTP;
}
btn.addEventListener('click', ()=>{
 generateOtp();
    let btn = document.querySelector(".btn").disabled = true;
});


