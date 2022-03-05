const form = document.getElementById('desktop-form');
// const firstName = document.getElementById('first-name');
// const lastName = document.getElementById('last-name');
// const name = document.getElementById('name');
const email = document.getElementById('desktop-email');
const errorMessage = document.querySelector('#error');

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control error';
  errorMessage.classList.add('smallerror');
  form.classList.add('formerror');
}

function checkInputs() {
  // const firstnameValue = firstName.value.trim();
  // const lastnameValue = firstName.value.trim();
  // const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const lowerEmail = emailValue.toLowerCase();

  if (emailValue !== lowerEmail) {
    setErrorFor(email, 'Email should be in lowercase');
    return false;
  } return true;
}

form.addEventListener('submit', (e) => {
  if (!checkInputs()) {
    e.preventDefault();
  }
});