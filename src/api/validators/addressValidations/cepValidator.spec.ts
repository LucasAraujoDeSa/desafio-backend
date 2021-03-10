import { CepValidator } from './cepValidator';

describe('cep validator', () => {
  it('should return a false if cep is invalid', () => {
    const cepValidator = new CepValidator();

    const cep = 0;

    const isValid = cepValidator.validate(cep);

    expect(isValid).toBeFalsy();
  });
});
