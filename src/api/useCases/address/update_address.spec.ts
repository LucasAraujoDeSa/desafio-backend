import { AddressInMemory } from '../../repositories/address/inMemory/AddressInMemory';
import { addressValidationGroup } from '../../validators/addressValidations/addressValidationGroup';
import { CreateAddress } from './create_address';
import { UpdateAddress } from './update_address';

describe('update address', () => {
  let addressInMemory: AddressInMemory;
  let createAddress: CreateAddress;
  let updateAddress: UpdateAddress;
  beforeEach(() => {
    addressInMemory = new AddressInMemory();
    createAddress = new CreateAddress(addressInMemory, addressValidationGroup);
    updateAddress = new UpdateAddress(addressInMemory, addressValidationGroup);
  });

  it('should update a address', async () => {
    const data = {
      user_id: 'user_id',
      endereço: 'any',
      numero: 22,
      complemento: 'any',
      cep: 1212432,
      cidade: 'any',
      estado: 'any',
    };

    const address = await createAddress.execute(data);

    await updateAddress.execute({
      id: address.id,
      endereço: 'any_updated',
      numero: 22,
      complemento: 'any',
      cep: 1212432,
      cidade: 'any',
      estado: 'any',
    });

    expect(address.endereço).toEqual('any_updated');
  });

  it('should return a error if address not exist', async () => {
    expect(
      updateAddress.execute({
        id: 'any_id',
        endereço: 'any_updated',
        numero: 22,
        complemento: 'any',
        cep: 1212432,
        cidade: 'any',
        estado: 'any',
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
