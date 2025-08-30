 document.addEventListener('DOMContentLoaded', () => {
 const nameInput = document.getElementById('nameInput');
 const dobInput = document.getElementById('dobInput');
 const submitBtn = document.getElementById('submitBtn');
 const loginContainer =
 document.getElementById('login-container');
 const contentContainer =
 document.getElementById('content-container');
 const welcomeMessage =
 document.getElementById('welcome-message');
 const errorMessage =
document.getElementById('error-message');
 // --- YOUR CORRECT VALUES HERE --
const correctName = 'srimathi joice'; // Use lowercase for easier comparison
 const correctDOB = '2004-09-01'; // YYYY-MM-DD format
 submitBtn.addEventListener('click', () => {
 const enteredName = nameInput.value.trim().toLowerCase();
 const enteredDOB = dobInput.value.trim();
 if (enteredName === correctName && enteredDOB === correctDOB) {
 // Success: Hide form and show content
 loginContainer.classList.add('hidden');
 contentContainer.classList.remove('hidden');
 welcomeMessage.textContent = `Welcome, ${nameInput.value}!`;
 errorMessage.classList.add('hidden');
 } else {
 // Failure: Show error message
 errorMessage.textContent = 'Incorrect name or date of birth. Please try again.';
 errorMessage.classList.remove('hidden');
 }
 });
 });