import { AgeValidator } from './ageValidator';

describe('age validator', () => {
  it('should return a false if age is  invalid', () => {
    const ageValidator = new AgeValidator();

    const age = -1;

    const isValid = ageValidator.validate(age);

    expect(isValid).toBeFalsy();
  });
});
