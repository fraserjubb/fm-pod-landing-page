const heroForm = document.querySelector('.hero__form');
const emailInput = document.getElementById('email');
const formButton = document.querySelector('.hero__button');

let feedbackExists;
let feedbackElement;

function createFeedback() {
  feedbackElement = document.createElement('p');
  feedbackElement.classList.add('hero__input-feedback');
  feedbackElement.textContent = '';
  feedbackExists = true;

  emailInput.after(feedbackElement);
}

function updateFeedback() {
  const cleanedEmail = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;

  cleanedEmail.length === 0
    ? (feedbackElement.textContent = 'Oops! Please add your email')
    : (feedbackElement.textContent = 'Oops! Please check your email');

  if (emailRegex.test(cleanedEmail)) {
    feedbackElement.textContent = 'Success!';
    feedbackElement.classList.add('hero__input-feedback--success');
    emailInput.classList.add('hero__input-outline--success');
  } else if (!emailRegex.test(cleanedEmail)) {
    feedbackElement.classList.add('hero__input-feedback--error');
    emailInput.classList.add('hero__input-outline--error');
  }
}

function removeFeedback() {
  feedbackElement.textContent = '';
  feedbackElement.classList.remove('hero__input-feedback--success');
  feedbackElement.classList.remove('hero__input-feedback--error');
  emailInput.classList.remove('hero__input-outline--success');
  emailInput.classList.remove('hero__input-outline--error');
}

function checkFeedback() {
  if (!feedbackExists) {
    createFeedback();
  }
  removeFeedback();
  updateFeedback();
}

function handleFeedback(e) {
  e.preventDefault();

  checkFeedback();
}

formButton.addEventListener('click', handleFeedback);
emailInput.addEventListener('input', removeFeedback);
heroForm.addEventListener('submit', handleFeedback);
