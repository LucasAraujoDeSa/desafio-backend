import { HashInMemory } from '../../providers/hashProvider/inMemory/hashInMemory';
import UserInMemory from '../../repositories/user/inMemory/userInMemory';
import { userValidationGroup } from '../../validators/userValidations/userValidationGroup';

import CreateUser from './create_user';
import DeleteUser from './deleteUser';
import ListUser from './listUser';

describe('delete user', () => {
  let userInMemory: UserInMemory;
  let createUser: CreateUser;
  let listUser: ListUser;
  let deleteUser: DeleteUser;
  let hashProvider: HashInMemory;
  beforeEach(() => {
    userInMemory = new UserInMemory();
    hashProvider = new HashInMemory();
    createUser = new CreateUser(
      userInMemory,
      hashProvider,
      userValidationGroup,
    );
    listUser = new ListUser(userInMemory);
    deleteUser = new DeleteUser(userInMemory);
  });
  it('should delete a user', async () => {
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

    await createUser.execute({
      nome: 'user3',
      email: 'user3@email.com',
      senha: '123',
      telefone: 92929372,
      idade: 12,
      peso: 85.0,
      etinia: 'branco',
    });

    const users = await listUser.execute();

    deleteUser.execute('2');

    expect(users).toEqual([user1, user2]);
  });
});
