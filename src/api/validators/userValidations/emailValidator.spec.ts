import { EmailValidator } from './emailValidator';

describe('email validator', () => {
  it('should return a false if age is  invalid', () => {
    const emailValidator = new EmailValidator();

    const email = 'email';

    const isValid = emailValidator.validate(email);

    expect(isValid).toBeFalsy();
  });
});
