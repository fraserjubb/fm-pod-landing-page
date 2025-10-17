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
    isSuccess = false;
    feedbackContent = document.createTextNode('Oops! Please add your email');
    feedbackElement.classList.add('hero__input-feedback--error');
  } else if (!emailRegex.test(cleanedEmail)) {
    isSuccess = false;
    feedbackContent = document.createTextNode('Oops! Please check your email');
    feedbackElement.classList.add('hero__input-feedback--error');
  } else {
    isSuccess = true;
    feedbackContent = document.createTextNode('Success!');
    feedbackElement.classList.add('hero__input-feedback--success');
  }

  isSuccess
    ? (emailInput.style.outline = '2px solid var(--clr-green)')
    : (emailInput.style.outline = '2px solid var(--clr-red)');

  feedbackElement.appendChild(feedbackContent);
  emailInput.after(feedbackElement);
}

function removeExistingFeedback() {
  const existingFeedback = heroForm.querySelector('.hero__input-feedback');
  if (existingFeedback) {
    existingFeedback.remove();
    emailInput.style.outline = 'none';
  }
}

function handleFeedback(e) {
  e.preventDefault();

  removeExistingFeedback();
  createFeedback();
}

formButton.addEventListener('click', handleFeedback);

emailInput.addEventListener('submit', () => removeExistingFeedback());
