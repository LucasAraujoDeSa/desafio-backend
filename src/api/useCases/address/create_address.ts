import Address from '../../entities/Address';
import { IAddressRepository } from '../../repositories/address/IAddressRepository';
import { AddressValidationGroup } from '../../validators/addressValidations/addressValidationGroup';
import { IAddressDTO } from './dto/IAddressDTO';

export class CreateAddress {
  constructor(
    private repository: IAddressRepository,
    private addressValidationGroup: AddressValidationGroup,
  ) {}

  public async execute({
    cep,
    cidade,
    complemento,
    endereço,
    estado,
    numero,
    user_id,
  }: IAddressDTO): Promise<Address> {
    const isValid = this.addressValidationGroup.validate(cep);

    if (!isValid) {
      throw new Error('param invalid');
    }

    const address = await this.repository.create({
      cep,
      cidade,
      complemento,
      endereço,
      estado,
      numero,
      user_id,
    });

    return address;
  }
}
