if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const loadButton = document.getElementById('load-student');
    const testResult = document.querySelector('.test-result');

    if (!loadButton) return;

    loadButton.addEventListener('click', async () => {
      testResult.textContent = 'Loading student data...';

      try {
        const response = await fetch('student.json');
        if (!response.ok) {
          throw new Error('Unable to load student.json');
        }

        const student = await response.json();
        const validation = window.validateStudentData(student);

        if (!validation.success) {
          testResult.textContent = `Validation failed: ${validation.message}`;
          testResult.style.color = 'red';
          return;
        }

        window.populateFormFromStudent(student);
        testResult.textContent = 'Student data loaded and validated successfully.';
        testResult.style.color = 'green';
      } catch (error) {
        testResult.textContent = `Error: ${error.message}`;
        testResult.style.color = 'red';
      }
    });
  });
}
