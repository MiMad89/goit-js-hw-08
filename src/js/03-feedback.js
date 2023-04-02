import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const emailEl = document.querySelector('input[type=email]');
const messageEl = document.querySelector('textarea[name=message]');
const dataEl = JSON.parse(localStorage.getItem('feedback-form-state'));

const data = {
  email: '',
  message: '',
};

const updateEl = () => {
  if (dataEl) {
    data.email = dataEl.email;
    data.message = dataEl.message;
  } else {
    data.email = '';
    data.message = '';
  }
  emailEl.value = data.email;
  messageEl.value = data.message;
};

const saveEl = throttle(event => {
  data[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}, 500);

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  form.reset();
  localStorage.removeItem('feedback-form-state');
});

updateEl();
emailEl.addEventListener('input', saveEl);
messageEl.addEventListener('input', saveEl);
