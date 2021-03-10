import { WeightValidator } from './weightValidator';

describe('weight validator', () => {
  it('should return a false if weight is invalid', () => {
    const weightValidator = new WeightValidator();

    const weight = -1;

    const isValid = weightValidator.validate(weight);

    expect(isValid).toBeFalsy();
  });
});
