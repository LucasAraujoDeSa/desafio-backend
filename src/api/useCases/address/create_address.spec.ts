import { InvalidParamError } from '../../errors/invalidParamError';
import { AddressInMemory } from '../../repositories/address/inMemory/AddressInMemory';
import { addressValidationGroup } from '../../validators/addressValidations/addressValidationGroup';
import { CreateAddress } from './create_address';

describe('create address', () => {
  let addressInMemory: AddressInMemory;
  let createAddress: CreateAddress;

  beforeEach(() => {
    addressInMemory = new AddressInMemory();
    createAddress = new CreateAddress(addressInMemory, addressValidationGroup);
  });

  it('should create a address', async () => {
    const data = {
      user_id: 'user_id',
      endereço: 'any',
      numero: 22,
      complemento: 'any',
      cep: 1234123,
      cidade: 'any',
      estado: 'any',
    };

    const address = await createAddress.execute(data);

    expect(address.cep).toEqual(1234123);
  });
  it('should return a error if cep is invalid', async () => {
    const data = {
      user_id: 'user_id',
      endereço: 'any',
      numero: 22,
      complemento: 'any',
      cep: 1,
      cidade: 'any',
      estado: 'any',
    };

    expect(createAddress.execute(data)).rejects.toBeInstanceOf(
      InvalidParamError,
    );
  });
});
