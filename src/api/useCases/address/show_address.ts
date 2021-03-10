import Address from '../../entities/Address';
import { IAddressRepository } from '../../repositories/address/IAddressRepository';

export class ShowAddress {
  constructor(private repository: IAddressRepository) {}

  public async execute(id: string): Promise<Address> {
    const address = await this.repository.findById(id);

    if (!address) {
      throw new Error('not exist');
    }

    return address;
  }
}
