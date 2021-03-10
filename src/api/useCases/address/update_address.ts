import Address from '../../entities/Address';
import { IAddressRepository } from '../../repositories/address/IAddressRepository';
import { AddressValidationGroup } from '../../validators/addressValidations/addressValidationGroup';

interface IRequest {
  id: string;
  endereço: string;
  numero: number;
  complemento: string;
  cep: number;
  cidade: string;
  estado: string;
}

export class UpdateAddress {
  constructor(
    private repository: IAddressRepository,
    private addressValidationGroup: AddressValidationGroup,
  ) {}

  public async execute({
    id,
    endereço,
    numero,
    complemento,
    cep,
    cidade,
    estado,
  }: IRequest): Promise<Address> {
    const address = await this.repository.findById(id);

    if (!address) {
      throw new Error('not exist');
    }

    const isValid = this.addressValidationGroup.validate(cep);

    if (!isValid) {
      throw new Error('param invalid');
    }

    address.endereço = endereço;
    address.numero = numero;
    address.complemento = complemento;
    address.cep = cep;
    address.cidade = cidade;
    address.estado = estado;

    await this.repository.save(address);

    return address;
  }
}
