import { IAddressRepository } from '../../repositories/address/IAddressRepository';

export class DeleteAddress {
  constructor(private repository: IAddressRepository) {}

  public async execute(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
