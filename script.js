const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const rePassword = document.getElementById("repassword");

listAddEventListener();
function listAddEventListener() {
  form.addEventListener("submit", handlerSubmit);
}

function success(input, text) {
  input.className = "form-control is-valid";
  const div = input.nextElementSibling;
  div.innerText = text;
  div.className = "";
}
function error(input, text) {
  input.className = "form-control is-invalid";
  const div = input.nextElementSibling;
  div.innerText = text;
  div.className = "invalid-feedback";
}

function checkRequired(input) {
  input.forEach((element) => {
    element.value === ""
      ? error(element, `${element.id} is required`)
      : success(element, "");
  });
}
function checkPassword(password, rePassword) {
  password.value !== rePassword.value
    ? error(rePassword, `${rePassword.id} is required`)
    : success(rePassword, "");
}

function handlerSubmit(e) {
  e.preventDefault();
  checkRequired([userName, email, password, rePassword]);
  checkLenght(userName, 7);
  checkPassword(password, rePassword);
}
function checkLenght(input, min) {
  input.value.length < min
    ? error(input, `${input.id} min ${min} `)
    : success(input, "");
}
