import { IValidate } from '../IValidate';

export class AgeValidator implements IValidate {
  public validate(age: number): boolean {
    if (age <= -1) {
      return false;
    }
    return true;
  }
}
