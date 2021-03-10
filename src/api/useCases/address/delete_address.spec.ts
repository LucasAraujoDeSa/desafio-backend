import { AddressInMemory } from '../../repositories/address/inMemory/AddressInMemory';
import { addressValidationGroup } from '../../validators/addressValidations/addressValidationGroup';
import { CreateAddress } from './create_address';
import { DeleteAddress } from './delete_address';
import { ListAddress } from './list_address';

describe('delete address', () => {
  let addressInMemory: AddressInMemory;
  let createAddress: CreateAddress;
  let listAddress: ListAddress;
  let deleteAddress: DeleteAddress;
  beforeEach(() => {
    addressInMemory = new AddressInMemory();
    createAddress = new CreateAddress(addressInMemory, addressValidationGroup);
    listAddress = new ListAddress(addressInMemory);
    deleteAddress = new DeleteAddress(addressInMemory);
  });

  it('should delete a address', async () => {
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
    await createAddress.execute({
      user_id: 'address_id',
      endereço: 'any',
      numero: 22,
      complemento: 'any',
      cep: 1212432,
      cidade: 'any',
      estado: 'any',
    });

    await deleteAddress.execute('2');

    const list = await listAddress.execute();

    expect(list).toEqual([address1, address2]);
  });
});
