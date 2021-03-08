import { HashInMemory } from '../../providers/hashProvider/inMemory/hashInMemory';
import UserInMemory from '../../repositories/user/inMemory/userInMemory';

import CreateUser from './create_user';
import { ShowUser } from './show_user';

describe('list user', () => {
  let userInMemory: UserInMemory;
  let createUser: CreateUser;
  let hashProvider: HashInMemory;
  let showUser: ShowUser;
  beforeEach(() => {
    userInMemory = new UserInMemory();
    hashProvider = new HashInMemory();
    createUser = new CreateUser(userInMemory, hashProvider);
    showUser = new ShowUser(userInMemory);
  });
  it('should return a list of users', async () => {
    const user = await createUser.execute({
      nome: 'user1',
      email: 'user@email.com',
      senha: '123',
      telefone: 92929372,
      idade: 12,
      peso: 85.0,
      etinia: 'branco',
    });

    const findUser = await showUser.execute(user.id);

    expect(findUser).toEqual(user);
  });
});
