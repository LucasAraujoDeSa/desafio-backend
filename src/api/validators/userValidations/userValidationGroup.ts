import { InvalidParamError } from '../../errors/invalidParamError';
import { IValidate } from '../IValidate';
import { AgeValidator } from './ageValidator';
import { EmailValidator } from './emailValidator';
import { PhoneNumberValidator } from './phoneNumberValidator';
import { WeightValidator } from './weightValidator';

interface IInpuntValidation {
  email: string;
  telefone: number;
  idade: number;
  peso: number;
}

export class UserValidationGroup implements IValidate {
  constructor(
    private emailValidator: EmailValidator,
    private phoneNumberValidator: PhoneNumberValidator,
    private ageValidator: AgeValidator,
    private WeightValidator: WeightValidator,
  ) {}

  public validate({
    email,
    telefone,
    idade,
    peso,
  }: IInpuntValidation): boolean {
    const emailVerify = this.emailValidator.validate(email);
    const phoneNumberVerify = this.phoneNumberValidator.validate(telefone);
    const ageVerify = this.ageValidator.validate(idade);
    const wheightVerify = this.WeightValidator.validate(peso);

    if (!emailVerify) {
      throw new InvalidParamError('email');
    } else if (!phoneNumberVerify) {
      throw new InvalidParamError('phone');
    } else if (!ageVerify) {
      throw new InvalidParamError('age');
    } else if (!wheightVerify) {
      throw new InvalidParamError('weight');
    } else {
      return true;
    }
  }
}

const emailValidator = new EmailValidator();
const phoneNumberValidator = new PhoneNumberValidator();
const ageValidator = new AgeValidator();
const weightValidator = new WeightValidator();

export const userValidationGroup = new UserValidationGroup(
  emailValidator,
  phoneNumberValidator,
  ageValidator,
  weightValidator,
);
