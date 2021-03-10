import { AddressInMemory } from '../../repositories/address/inMemory/AddressInMemory';
import { addressValidationGroup } from '../../validators/addressValidations/addressValidationGroup';
import { CreateAddress } from './create_address';
import { ShowAddress } from './show_address';

describe('show address', () => {
  let addressInMemory: AddressInMemory;
  let createAddress: CreateAddress;
  let showAddress: ShowAddress;
  beforeEach(() => {
    addressInMemory = new AddressInMemory();
    createAddress = new CreateAddress(addressInMemory, addressValidationGroup);
    showAddress = new ShowAddress(addressInMemory);
  });

  it('should show a address', async () => {
    const data = {
      user_id: 'address_id',
      endereço: 'any',
      numero: 22,
      complemento: 'any',
      cep: 1212432,
      cidade: 'any',
      estado: 'any',
    };

    const address = await createAddress.execute(data);

    const findAddress = await showAddress.execute(address.id);

    expect(findAddress).toEqual(address);
  });

  it('should return a error if address no exist', async () => {
    expect(showAddress.execute('address_id')).rejects.toBeInstanceOf(Error);
  });
});
