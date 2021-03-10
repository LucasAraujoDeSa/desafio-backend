import { InvalidParamError } from '../../errors/invalidParamError';
import { HashInMemory } from '../../providers/hashProvider/inMemory/hashInMemory';
import UserInMemory from '../../repositories/user/inMemory/userInMemory';
import { userValidationGroup } from '../../validators/userValidations/userValidationGroup';

import CreateUser from './create_user';
import UpdateUser from './updateUser';

describe('update user', () => {
  let userInMemory: UserInMemory;
  let createUser: CreateUser;
  let updateUser: UpdateUser;
  let hashProvider: HashInMemory;
  beforeEach(() => {
    userInMemory = new UserInMemory();
    hashProvider = new HashInMemory();
    createUser = new CreateUser(
      userInMemory,
      hashProvider,
      userValidationGroup,
    );
    updateUser = new UpdateUser(userInMemory, userValidationGroup);
  });
  it('should update a user', async () => {
    const data = {
      nome: 'user1',
      email: 'user@email.com',
      senha: '123',
      telefone: 92929372,
      idade: 12,
      peso: 85.0,
      etinia: 'branco',
    };

    const user = await createUser.execute(data);

    await updateUser.execute({
      user_id: user.id,
      nome: 'user_updated',
      email: 'user@email.com',
      telefone: 92929372,
      idade: 12,
      peso: 85.0,
    });

    expect(user.nome).toEqual('user_updated');
  });
  it('should throw a error if email is invalid', async () => {
    const data = {
      nome: 'user1',
      email: 'useremail.com',
      senha: '123',
      telefone: 92929372,
      idade: 12,
      peso: 85.0,
      etinia: 'branco',
    };

    await expect(createUser.execute(data)).rejects.toBeInstanceOf(
      InvalidParamError,
    );
  });

  it('should throw a error if phone is invalid', async () => {
    const data = {
      nome: 'user1',
      email: 'user@email.com',
      senha: '123',
      telefone: 74,
      idade: 12,
      peso: 85.0,
      etinia: 'branco',
    };

    await expect(createUser.execute(data)).rejects.toBeInstanceOf(
      InvalidParamError,
    );
  });
  it('should throw a error if age is invalid', async () => {
    const data = {
      nome: 'user1',
      email: 'user@email.com',
      senha: '123',
      telefone: 74,
      idade: -12,
      peso: 85.0,
      etinia: 'branco',
    };

    await expect(createUser.execute(data)).rejects.toBeInstanceOf(
      InvalidParamError,
    );
  });

  it('should throw a error if weight is invalid', async () => {
    const data = {
      nome: 'user1',
      email: 'user@email.com',
      senha: '123',
      telefone: 74,
      idade: 12,
      peso: -85.0,
      etinia: 'branco',
    };

    await expect(createUser.execute(data)).rejects.toBeInstanceOf(
      InvalidParamError,
    );
  });
});
