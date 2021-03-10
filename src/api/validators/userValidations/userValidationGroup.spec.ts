import { UserValidationGroup } from './userValidationGroup';
import { WeightValidator } from './weightValidator';
import { AgeValidator } from './ageValidator';
import { EmailValidator } from './emailValidator';
import { PhoneNumberValidator } from './phoneNumberValidator';

describe('weight validator', () => {
  let weightValidator: WeightValidator;
  let ageValidator: AgeValidator;
  let emailValidator: EmailValidator;
  let phoneNumberValidator: PhoneNumberValidator;
  let userValidationGroup: UserValidationGroup;
  beforeEach(() => {
    weightValidator = new WeightValidator();
    ageValidator = new AgeValidator();
    emailValidator = new EmailValidator();
    phoneNumberValidator = new PhoneNumberValidator();
    userValidationGroup = new UserValidationGroup(
      emailValidator,
      phoneNumberValidator,
      ageValidator,
      weightValidator,
    );
  });
  it('should return a true', () => {
    const data = {
      email: 'email@email.com',
      telefone: 9292929292,
      idade: 18,
      peso: 80.0,
    };

    const isValid = userValidationGroup.validate(data);

    expect(isValid).toBeTruthy();
  });
});
