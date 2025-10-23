const heroForm = document.querySelector('.hero__form');
const emailInput = document.getElementById('email');
const formButton = document.querySelector('.hero__button');

let feedbackCreated = false;
let feedbackElement;

function createFeedback() {
  feedbackElement = document.createElement('p');
  feedbackElement.classList.add('hero__input-feedback');
  feedbackElement.textContent = '';
  feedbackElement.setAttribute('aria-live', 'polite');
  feedbackCreated = true;

  emailInput.after(feedbackElement);
}

function updateFeedback() {
  const cleanedEmail = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;

  const isValid = emailRegex.test(cleanedEmail);

  cleanedEmail.length === 0
    ? (feedbackElement.textContent = 'Oops! Please add your email')
    : (feedbackElement.textContent = 'Oops! Please check your email');

  if (isValid) {
    feedbackElement.textContent = 'Success!';
    feedbackElement.classList.add('hero__input-feedback--success');
    emailInput.classList.add('hero__input-outline--success');
  } else if (!isValid) {
    feedbackElement.classList.add('hero__input-feedback--error');
    emailInput.classList.add('hero__input-outline--error');
  }
}

function removeFeedback() {
  feedbackElement.textContent = '';
  feedbackElement.classList.remove(
    'hero__input-feedback--success',
    'hero__input-feedback--error'
  );
  emailInput.classList.remove(
    'hero__input-outline--success',
    'hero__input-outline--error'
  );
}

function checkFeedback() {
  if (!feedbackCreated) {
    createFeedback();
  }
  removeFeedback();
  updateFeedback();
}

function handleFeedback(e) {
  e.preventDefault();

  checkFeedback();
}

emailInput.addEventListener('input', removeFeedback);
heroForm.addEventListener('submit', handleFeedback);
