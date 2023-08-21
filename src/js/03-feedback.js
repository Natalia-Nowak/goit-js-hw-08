var _ = require('lodash');

const message = document.querySelector('[name="message"]');
const email = document.querySelector('[name="email"]');
const form = document.querySelector('.feedback-form');

try {
  const savedForm = JSON.parse(localStorage.getItem('feedback-form-state'));

  message.value = savedForm.message;
  email.value = savedForm.email;
} catch (error) {}

message.addEventListener(
  'input',
  _.throttle(function () {
    const formState = { message: message.value, email: email.value };
    console.log(message);
    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
  }, 500)
);

email.addEventListener(
  'input',
  _.throttle(function () {
    const formState = { message: message.value, email: email.value };
    console.log(email);
    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
  }, 500)
);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

  localStorage.removeItem('feedback-form-state');
  message.value = '';
  email.value = '';
});
