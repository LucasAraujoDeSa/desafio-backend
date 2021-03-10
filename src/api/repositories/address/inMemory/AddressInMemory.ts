import { v4 } from 'uuid';
import Address from '../../../entities/Address';
import { IAddressDTO } from '../../../useCases/address/dto/IAddressDTO';
import { IAddressRepository } from '../IAddressRepository';

export class AddressInMemory implements IAddressRepository {
  private address: Address[] = [];

  public async create({
    user_id,
    endereço,
    numero,
    complemento,
    cep,
    cidade,
    estado,
  }: IAddressDTO): Promise<Address> {
    const address = new Address();

    Object.assign(address, {
      id: v4(),
      user_id,
      endereço,
      numero,
      complemento,
      cep,
      cidade,
      estado,
    });

    this.address.push(address);

    return address;
  }

  public async findById(id: string): Promise<Address | undefined> {
    return this.address.find(address => address.id === id);
  }

  public async delete(id: string): Promise<void> {
    const findId = Number(id);
    this.address.splice(findId, 1);
  }

  public async list(): Promise<Address[]> {
    return this.address;
  }

  public async save(data: Address): Promise<void> {
    const findAddress = this.address.findIndex(
      address => address.id === data.id,
    );

    this.address[findAddress] = data;
  }
}
