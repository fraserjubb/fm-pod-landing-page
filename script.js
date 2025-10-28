/* 
********************************
QUERY SELECTORS:
********************************
*/
const heroForm = document.querySelector('.hero__form');
const emailInput = document.getElementById('email');

/* 
********************************
GLOBAL VARIABLES:
********************************
*/
let feedbackCreated = false;
let feedbackElement;

/* 
********************************
FUNCTIONS:
********************************
*/
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

  let message;
  let feedbackClass;
  let outlineClass;

  if (cleanedEmail.length === 0) {
    message = 'Oops! Please add your email';
    feedbackClass = 'hero__input-feedback--error';
    outlineClass = 'hero__input-outline--error';
  } else if (!isValid) {
    message = 'Oops! Please check your email';
    feedbackClass = 'hero__input-feedback--error';
    outlineClass = 'hero__input-outline--error';
  } else {
    message = 'Success!';
    feedbackClass = 'hero__input-feedback--success';
    outlineClass = 'hero__input-outline--success';
  }

  feedbackElement.textContent = message;
  feedbackElement.classList.add(feedbackClass);
  emailInput.classList.add(outlineClass);
}

function removeFeedback() {
  if (!feedbackElement) return; // prevent error before it's created

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

/* 
********************************
EVENT LISTENERS:
********************************
*/
emailInput.addEventListener('input', removeFeedback);
heroForm.addEventListener('submit', handleFeedback);

// Fixes cmd+a issue on tablet and mobile devices. Without it, it brings up the context menu.
emailInput.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'a') {
    // Force select all inside the input only
    e.preventDefault();
    emailInput.select();
  }
});
