const heroForm = document.querySelector('.hero__form');
const emailInput = document.getElementById('email');
const formButton = document.querySelector('.hero__button');

function createFeedback() {
  const cleanedEmail = emailInput.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const feedbackElement = document.createElement('p');

  let feedbackContent;
  if (cleanedEmail.length === 0) {
    feedbackContent = document.createTextNode('Oops! Please add your email');
    emailInput.classList.add('hero__input--error-outline');
    feedbackElement.classList.add('hero__input--error-message');
  } else if (!emailRegex.test(cleanedEmail)) {
    feedbackContent = document.createTextNode('Oops! Please check your email');
    emailInput.classList.add('hero__input--error-outline');
    feedbackElement.classList.add('hero__input--error-message');
  } else {
    feedbackContent = document.createTextNode('Success!');
    emailInput.classList.add('hero__input--success-outline');
    feedbackElement.classList.add('hero__input--success-message');
  }

  feedbackElement.appendChild(feedbackContent);
  emailInput.after(feedbackElement);
}

function removeExistingFeedback() {
  const existingError = heroForm.querySelector('.hero__input--error-message');
  if (existingError) {
    existingError.remove();
    emailInput.classList.remove('hero__input--error-outline');
  }
}

function handleFeedback(e) {
  e.preventDefault();

  removeExistingFeedback();
  createFeedback();
}

formButton.addEventListener('click', handleFeedback);

emailInput.addEventListener('input', () => removeExistingFeedback());
