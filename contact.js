// Form Submission Handler
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');

      let isValid = true;

      if (nameInput.value.trim() === '') {
        isValid = false;
        nameInput.style.borderColor = 'red';
      } else {
        nameInput.style.borderColor = '';
      }

      if (
        emailInput.value.trim() === '' ||
        !isValidEmail(emailInput.value)
      ) {
        isValid = false;
        emailInput.style.borderColor = 'red';
      } else {
        emailInput.style.borderColor = '';
      }

      if (subjectInput.value.trim() === '') {
        isValid = false;
        subjectInput.style.borderColor = 'red';
      } else {
        subjectInput.style.borderColor = '';
      }

      if (messageInput.value.trim() === '') {
        isValid = false;
        messageInput.style.borderColor = 'red';
      } else {
        messageInput.style.borderColor = '';
      }

      if (isValid) {
        alert('Your message has been sent successfully!');
        contactForm.reset();
      } else {
        alert('Please fill all the required fields correctly.');
      }
    });
  }

// Email validation helper
function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
