import { HashInMemory } from '../../providers/hashProvider/inMemory/hashInMemory';
import UserInMemory from '../../repositories/user/inMemory/userInMemory';

import CreateUser from './create_user';
import ListUser from './listUser';

describe('list user', () => {
  let userInMemory: UserInMemory;
  let createUser: CreateUser;
  let listUser: ListUser;
  let hashProvider: HashInMemory;
  beforeEach(() => {
    userInMemory = new UserInMemory();
    hashProvider = new HashInMemory();
    createUser = new CreateUser(userInMemory, hashProvider);
    listUser = new ListUser(userInMemory);
  });
  it('should return a list of users', async () => {
    const user1 = await createUser.execute({
      nome: 'user1',
      email: 'user@email.com',
      senha: '123',
      telefone: 92929372,
      idade: 12,
      peso: 85.0,
      etinia: 'branco',
    });
    const user2 = await createUser.execute({
      nome: 'user2',
      email: 'user2@email.com',
      senha: '123',
      telefone: 92929372,
      idade: 12,
      peso: 85.0,
      etinia: 'branco',
    });

    const users = await listUser.execute();

    expect(users).toEqual([user1, user2]);
  });
});
