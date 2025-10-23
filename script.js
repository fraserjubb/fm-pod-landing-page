const heroForm = document.querySelector('.hero__form');
const emailInput = document.getElementById('email');
const formButton = document.querySelector('.hero__button');

function createFeedback() {
  const cleanedEmail = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;

  const feedbackElement = document.createElement('p');
  feedbackElement.classList.add('hero__input-feedback');

  let feedbackText;
  let isSuccess;
  if (cleanedEmail.length === 0) {
    isSuccess = false;
    feedbackText = document.createTextNode('Oops! Please add your email');
    feedbackElement.classList.add('hero__input-feedback--error');
  } else if (!emailRegex.test(cleanedEmail)) {
    isSuccess = false;
    feedbackText = document.createTextNode('Oops! Please check your email');
    feedbackElement.classList.add('hero__input-feedback--error');
  } else {
    isSuccess = true;
    feedbackText = document.createTextNode('Success!');
    feedbackElement.classList.add('hero__input-feedback--success');
  }

  emailInput.classList.remove(
    'hero__input-outline--success',
    'hero__input-outline--error'
  );

  isSuccess
    ? emailInput.classList.add('hero__input-outline--success')
    : emailInput.classList.add('hero__input-outline--error');

  feedbackElement.appendChild(feedbackText);
  emailInput.after(feedbackElement);
}

function removeExistingFeedback() {
  const existingFeedback = heroForm.querySelector('.hero__input-feedback');
  if (existingFeedback) {
    existingFeedback.remove();
  }
}

function removeFeedbackOutline() {
  emailInput.classList.remove('hero__input-outline--success');
  emailInput.classList.remove('hero__input-outline--error');
}

function handleFeedback(e) {
  e.preventDefault();

  removeExistingFeedback();
  createFeedback();
}

formButton.addEventListener('click', handleFeedback);
emailInput.addEventListener('input', removeFeedbackOutline());
heroForm.addEventListener('submit', handleFeedback());
