import Address from '../../entities/Address';
import { IAddressDTO } from '../../useCases/address/dto/IAddressDTO';

export interface IAddressRepository {
  create: (data: IAddressDTO) => Promise<Address>;
  findById: (id: string) => Promise<Address | undefined>;
  delete: (id: string) => Promise<void>;
  list: () => Promise<Address[]>;
  save: (data: Address) => Promise<void>;
}
