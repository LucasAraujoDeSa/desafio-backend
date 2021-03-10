import { AddressInMemory } from '../../repositories/address/inMemory/AddressInMemory';
import { addressValidationGroup } from '../../validators/addressValidations/addressValidationGroup';
import { CreateAddress } from './create_address';
import { ListAddress } from './list_address';

describe('list address', () => {
  let addressInMemory: AddressInMemory;
  let createAddress: CreateAddress;
  let listAddress: ListAddress;
  beforeEach(() => {
    addressInMemory = new AddressInMemory();
    createAddress = new CreateAddress(addressInMemory, addressValidationGroup);
    listAddress = new ListAddress(addressInMemory);
  });

  it('should list address', async () => {
    const address1 = await createAddress.execute({
      user_id: 'address_id',
      endereço: 'any',
      numero: 22,
      complemento: 'any',
      cep: 1212432,
      cidade: 'any',
      estado: 'any',
    });
    const address2 = await createAddress.execute({
      user_id: 'address_id',
      endereço: 'any',
      numero: 22,
      complemento: 'any',
      cep: 1212432,
      cidade: 'any',
      estado: 'any',
    });
    const address3 = await createAddress.execute({
      user_id: 'address_id',
      endereço: 'any',
      numero: 22,
      complemento: 'any',
      cep: 1212432,
      cidade: 'any',
      estado: 'any',
    });

    const list = await listAddress.execute();

    expect(list).toEqual([address1, address2, address3]);
  });
});
