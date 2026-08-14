const test = require('node:test');
const assert = require('node:assert/strict');

const {
  validatePassword,
  isValidMobile,
  isValidEmail,
  validateStudentData,
} = require('./script.js');

test('validatePassword accepts at least six characters', () => {
  assert.equal(validatePassword('abcdef'), true);
  assert.equal(validatePassword('12345'), false);
});

test('isValidMobile accepts exactly 10 digits', () => {
  assert.equal(isValidMobile('1234567890'), true);
  assert.equal(isValidMobile('12345'), false);
  assert.equal(isValidMobile('123456789a'), false);
});

test('isValidEmail accepts valid emails', () => {
  assert.equal(isValidEmail('alice@example.com'), true);
  assert.equal(isValidEmail('invalid-email'), false);
  assert.equal(isValidEmail('test@domain.co.uk'), true);
});

test('validateStudentData rejects invalid student data', () => {
  const result = validateStudentData({
    name: 'Alice',
    password: 'abc',
    email: 'alice@example.com',
    mobile: '1234567890',
  });

  assert.deepEqual(result, {
    success: false,
    message: 'Student password must be at least 6 characters.',
  });
});

test('validateStudentData accepts valid student data', () => {
  const result = validateStudentData({
    name: 'Alice',
    password: 'abcdef',
    email: 'alice@example.com',
    mobile: '1234567890',
  });

  assert.deepEqual(result, {
    success: true,
    message: 'Student data is valid.',
  });
})
