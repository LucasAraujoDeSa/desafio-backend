import { getRepository, Repository } from 'typeorm';
import Address from '../../../entities/Address';
import { IAddressDTO } from '../../../useCases/address/dto/IAddressDTO';
import { IAddressRepository } from '../IAddressRepository';

export class AddressRepository implements IAddressRepository {
  private ormRepository: Repository<Address>;

  constructor() {
    this.ormRepository = getRepository(Address);
  }

  public async create(data: IAddressDTO): Promise<Address> {
    const address = this.ormRepository.create(data);

    await this.ormRepository.save(address);

    return address;
  }

  public async findById(id: string): Promise<Address | undefined> {
    const address = await this.ormRepository.findOne(id, {
      relations: ['user'],
    });

    return address;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async list(): Promise<Address[]> {
    const address = await this.ormRepository.find();
    return address;
  }

  public async save(data: Address): Promise<void> {
    await this.ormRepository.save(data);
  }
}
