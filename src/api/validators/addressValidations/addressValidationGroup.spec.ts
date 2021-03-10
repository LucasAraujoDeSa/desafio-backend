import { AddressValidationGroup } from './addressValidationGroup';
import { CepValidator } from './cepValidator';

describe('address validator', () => {
  let cepValidator: CepValidator;
  let validator: AddressValidationGroup;
  beforeEach(() => {
    cepValidator = new CepValidator();
    validator = new AddressValidationGroup(cepValidator);
  });
  it('should return true if cep is valid', () => {
    const cep = 1234123;

    const isValid = validator.validate(cep);

    expect(isValid).toBeTruthy();
  });
});
