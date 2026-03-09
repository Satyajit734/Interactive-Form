
const form = document.getElementById("myForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passInput = document.getElementById("password");


function validateName(){
  if(nameInput.value.trim().length < 3){
    nameError.textContent = "Name must be at least 3 characters";
    return false;
  }
  nameError.textContent = "";
  return true;
}

function validateEmail(){
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(!pattern.test(emailInput.value)){
    emailError.textContent = "Enter valid email";
    return false;
  }
  emailError.textContent = "";
  return true;
}

function validatePhone(){
  const pattern = /^[0-9]{10}$/;
  if(!pattern.test(phoneInput.value)){
    phoneError.textContent = "Enter 10 digit phone number";
    return false;
  }
  phoneError.textContent = "";
  return true;
}

function validatePassword(){
  if(passInput.value.length < 6){
    passError.textContent = "Password must be 6+ characters";
    return false;
  }
  passError.textContent = "";
  return true;
}


nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
phoneInput.addEventListener("input", validatePhone);
passInput.addEventListener("input", validatePassword);


form.addEventListener("submit", function(e){
  e.preventDefault();

  if(
    validateName() &
    validateEmail() &
    validatePhone() &
    validatePassword()
  ){
    successMsg.textContent = "✅ Submit Successful!";
    form.reset();
  }else{
    successMsg.textContent = "";
  }
});
