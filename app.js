const form= document.querySelector('#form');
const username= document.querySelector('#username');
const email= document.querySelector('#email');
const password= document.querySelector('#password');
const password1= document.querySelector('#password2');






form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();

    }
})

function validateInputs(){
    const usernameval = username.value.trim()
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const passwordval1 = password1.value.trim();
    let success=true


    if(usernameval===""){
        success=false;
        setError(username,'username is required')
    }
    else{
        setSuccess(username)
    }
    if(emailval===""){
        success=false;
        setError(email,'Email is required')
    }
    else if(!isEmail(emailval)){
        success=false;
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }
    if(password===''){
        success=false;
        setError(password,'Password is required')
    }
    else if(passwordval.length<8){
        success=false;
        setError(password,'Password must be atleast 8 characters long')
    }
    else{
        setSuccess(password)
    }
    if(passwordval1===""){
        success=false;
        setError(password1,"confirm password required")
    }
    else if(passwordval1!==passwordval){
        success=false;
        setError(password1,'confirm password does not match')
    }
    else{
        setSuccess(password1)
    }
    return success;

}

function setError(elememt,message){
    const inputGroup =elememt.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText =message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');

}

function setSuccess(elememt){
    const inputGroup =elememt.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText ="";
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');

}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
