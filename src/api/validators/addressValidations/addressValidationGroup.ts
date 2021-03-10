import { InvalidParamError } from '../../errors/invalidParamError';
import { IValidate } from '../IValidate';
import { CepValidator } from './cepValidator';

export class AddressValidationGroup implements IValidate {
  constructor(private cepValidator: CepValidator) {}

  public validate(cep: number): boolean {
    const cepVerify = this.cepValidator.validate(cep);

    if (!cepVerify) {
      throw new InvalidParamError('cep');
    } else {
      return true;
    }
  }
}

const cepValidator = new CepValidator();
export const addressValidationGroup = new AddressValidationGroup(cepValidator);
