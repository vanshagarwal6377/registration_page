function showMessage(text, color = 'green') {
  if (typeof document === 'undefined') return;

  const message = document.querySelector('.message');
  if (!message) return;

  message.textContent = text;
  message.style.color = color;
}

function validatePassword(password) {
  return typeof password === 'string' && password.length >= 6;
}

function isValidMobile(mobile) {
  return typeof mobile === 'string' && /^[0-9]{10}$/.test(mobile);
}

function isValidEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateStudentData(student) {
  if (!student || typeof student !== 'object') {
    return { success: false, message: 'Student data must be an object.' };
  }

  if (!student.name || student.name.trim().length === 0) {
    return { success: false, message: 'Student name is required.' };
  }

  if (!validatePassword(student.password)) {
    return { success: false, message: 'Student password must be at least 6 characters.' };
  }

  if (!isValidEmail(student.email)) {
    return { success: false, message: 'Student email must be a valid email address.' };
  }

  if (!isValidMobile(student.mobile)) {
    return { success: false, message: 'Student mobile number must be 10 digits.' };
  }

  return { success: true, message: 'Student data is valid.' };
}

function populateFormFromStudent(student) {
  if (!student || typeof student !== 'object' || typeof document === 'undefined') return;

  document.getElementById('name').value = student.name || '';
  document.getElementById('password').value = student.password || '';
  document.getElementById('email').value = student.email || '';
  document.getElementById('mobile').value = student.mobile || '';
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const message = document.querySelector('.message');

    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const password = document.getElementById('password').value;
      const mobile = document.getElementById('mobile').value;

      if (!validatePassword(password)) {
        showMessage('Password must be at least 6 characters long.', 'red');
        return;
      }

      if (!isValidMobile(mobile)) {
        showMessage('Mobile number must be 10 digits.', 'red');
        return;
      }

      showMessage('Form submitted successfully!', 'green');
      form.reset();
    });
  });
}

if (typeof module !== 'undefined') {
  module.exports = {
    validatePassword,
    isValidMobile,
    isValidEmail,
    validateStudentData,
    populateFormFromStudent,
    showMessage,
  };
}

if (typeof window !== 'undefined') {
  window.validateStudentData = validateStudentData;
  window.populateFormFromStudent = populateFormFromStudent;
  window.isValidMobile = isValidMobile;
}
