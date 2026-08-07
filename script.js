document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const message = document.querySelector('.message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const password = document.getElementById('password').value;
    const mobile = document.getElementById('mobile').value;

    if (password.length < 6) {
      message.textContent = 'Password must be at least 6 characters long.';
      message.style.color = 'red';
      return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      message.textContent = 'Mobile number must be 10 digits.';
      message.style.color = 'red';
      return;
    }

    message.textContent = 'Form submitted successfully!';
    message.style.color = 'green';
    form.reset();
  });
});
