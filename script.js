const heroForm = document.querySelector('.hero__form');
const emailInput = document.getElementById('email');
const formButton = document.querySelector('.hero__button');

function createFeedback() {
  const cleanedEmail = emailInput.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const feedbackElement = document.createElement('p');
  feedbackElement.classList.add('hero__input-feedback');

  let feedbackContent;
  let isSuccess;
  if (cleanedEmail.length === 0) {
    feedbackContent = document.createTextNode('Oops! Please add your email');
    isSuccess = false;
    feedbackElement.classList.add('hero__input-feedback--error');
  } else if (!emailRegex.test(cleanedEmail)) {
    feedbackContent = document.createTextNode('Oops! Please check your email');
    isSuccess = false;
    feedbackElement.classList.add('hero__input-feedback--error');
  } else {
    feedbackContent = document.createTextNode('Success!');
    isSuccess = true;
    feedbackElement.classList.add('hero__input-feedback--success');
  }

  isSuccess
    ? emailInput.classList.add('hero__input--success-outline')
    : emailInput.classList.add('hero__input--error-outline');

  feedbackElement.appendChild(feedbackContent);
  emailInput.after(feedbackElement);
}

function removeExistingFeedback() {
  const existingFeedback = heroForm.querySelector('.hero__input-feedback');
  if (existingFeedback) {
    existingFeedback.remove();
    emailInput.classList.remove('hero__input--error-outline');
    emailInput.classList.remove('hero__input--success-outline');
  }
}

function handleFeedback(e) {
  e.preventDefault();

  removeExistingFeedback();
  createFeedback();
}

formButton.addEventListener('click', handleFeedback);

emailInput.addEventListener('input', () => removeExistingFeedback());
