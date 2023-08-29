var _ = require('lodash');

const message = document.querySelector('[name="message"]');
const email = document.querySelector('[name="email"]');
const form = document.querySelector('.feedback-form');
const submit = document.querySelector('[type="submit"]');

try {
  const savedForm = JSON.parse(localStorage.getItem('feedback-form-state'));

  message.value = savedForm.message;
  email.value = savedForm.email;
  validateForm();
} catch (error) {}

message.addEventListener(
  'input',
  _.throttle(function () {
    saveFormInput();
    validateForm();
  }, 500)
);

email.addEventListener(
  'input',
  _.throttle(function () {
    saveFormInput();
    validateForm();
  }, 500)
);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

  localStorage.removeItem('feedback-form-state');
  message.value = '';
  email.value = '';
});

function saveFormInput() {
  const formState = { message: message.value, email: email.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}

function validateForm() {
  if (message.value === '' || email.value === '') {
    submit.disabled = true;
  } else {
    submit.disabled = false;
  }
}
