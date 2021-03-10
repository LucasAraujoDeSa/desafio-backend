import { PhoneNumberValidator } from './phoneNumberValidator';

describe('phone number validator', () => {
  it('should return a false if phone is  invalid', () => {
    const phoneNumberValidator = new PhoneNumberValidator();

    const phone = 91919;

    const isValid = phoneNumberValidator.validate(phone);

    expect(isValid).toBeFalsy();
  });
});
