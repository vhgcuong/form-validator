let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let btn = document.getElementById("btnSubmit");

// Show input error message
function showError(input, message) {
  let small = input.nextElementSibling;
  small.innerHTML  = message;

  let formControl = input.parentElement;
  formControl.className = 'error form-control';
}

// Show input success message 
function showSuccess(input) {
  let formControl = input.parentElement;
  formControl.className = 'success form-control';
}

function getFieldName(input) {
  let lbel = input.previousElementSibling;
  return lbel.innerHTML;
}

function checkRequired(inputArr) {
  inputArr.forEach(input => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} là bắt buộc.`);
    } else {
      showSuccess(input);
    }
  });
}

// Check value input username 
function checkUsername(input) {
  const regx =  /^[\d\w]{3,}$/;

  if (regx.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, `${getFieldName(input)} phải có ít nhất 3 ký tự`);
  }
}

// Check value input email
function checkEmail(input) {
  const regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regx.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, `${getFieldName(input)} không đúng định dạng`);
  }
}

// Check value input password
function checkPassword(input) {
  const regx = /^[*]{6,}$/;

  if (regx.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, `${getFieldName(input)} phải có ít nhất 6 ký tự`)
  }
}

// Check value input confirm password
function checkConfirmPassword(input, inputConfirm) {
  const pass = input.value; 
  const confirmPass = inputConfirm.value;

  if (pass !== confirmPass) {
    showError(inputConfirm, `${getFieldName(inputConfirm)} phải giống với ${getFieldName(input)}`)
  }
}

// Event 
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([username, email, password, confirmPassword]);
  checkUsername(username);
  checkEmail(email);
  checkPassword(password);
  checkConfirmPassword(password, confirmPassword);
});

