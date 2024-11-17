let eyeicon = document.getElementById("eyeIcon");
let passward = document.getElementById("password");

eyeicon.addEventListener("click",()=>{
    if(passward.type == "password"){
        passward.type = "text";
        eyeicon.src = "eye-open.png"
    }
    else{
        passward.type = "password";
        eyeicon.src="eye-close.png"
    }
})