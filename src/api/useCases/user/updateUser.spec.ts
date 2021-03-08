import { HashInMemory } from '../../providers/hashProvider/inMemory/hashInMemory';
import UserInMemory from '../../repositories/user/inMemory/userInMemory';

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
    createUser = new CreateUser(userInMemory, hashProvider);
    updateUser = new UpdateUser(userInMemory);
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

    await updateUser.execute(user.id, {
      nome: 'user_updated',
      email: 'user@email.com',
      telefone: 92929372,
      idade: 12,
      peso: 85.0,
    });

    expect(user.nome).toEqual('user_updated');
  });
});
