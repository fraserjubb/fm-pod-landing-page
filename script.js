const heroForm = document.querySelector('.hero__form');
const email = document.getElementById('email');
const formButton = document.querySelector('.hero__button');

function createErrorMessage() {
  const errorEl = document.createElement('p');
  const errorContent = document.createTextNode('Oops! Please check your email');

  errorEl.classList.add('hero__input--error-message');

  errorEl.appendChild(errorContent);
  return errorEl;
}

function createEmptyMessage() {
  const errorEl = document.createElement('p');
  const errorContent = document.createTextNode('Oops! Please add your email');

  errorEl.classList.add('hero__input--error-message');

  errorEl.appendChild(errorContent);
  return errorEl;
}

function checkExistingError() {
  const existingError = heroForm.querySelector('.hero__input--error-message');
  if (existingError) {
    existingError.remove();
  }
}

function addErrorMessage(e) {
  const cleanedEmail = email.value.trim();

  const errorMessage = createErrorMessage();
  const emptyMessage = createEmptyMessage();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  checkExistingError();

  e.preventDefault();

  if (cleanedEmail.length === 0) {
    console.log('Empty');
    email.after(emptyMessage);
  } else if (!emailRegex.test(cleanedEmail)) {
    console.log('Failed');
    email.after(errorMessage);
  } else {
    console.log('Success');
  }
}

formButton.addEventListener('click', addErrorMessage);

email.addEventListener('input', () => checkExistingError());

email.addEventListener('focus', () => {
  email.style.background = 'hotpink';
});
