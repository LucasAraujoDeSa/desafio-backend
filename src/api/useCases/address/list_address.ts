import Address from '../../entities/Address';
import { IAddressRepository } from '../../repositories/address/IAddressRepository';

export class ListAddress {
  constructor(private repository: IAddressRepository) {}

  public async execute(): Promise<Address[]> {
    const address = await this.repository.list();

    return address;
  }
}
