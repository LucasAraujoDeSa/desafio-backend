import { HashInMemory } from '../../providers/hashProvider/inMemory/hashInMemory';
import UserInMemory from '../../repositories/user/inMemory/userInMemory';
import CreateUser from './create_user';

describe('create user', () => {
  let userInMemory: UserInMemory;
  let createUser: CreateUser;
  let hashProvider: HashInMemory;
  beforeEach(() => {
    userInMemory = new UserInMemory();
    hashProvider = new HashInMemory();
    createUser = new CreateUser(userInMemory, hashProvider);
  });
  it('should create a user', async () => {
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

    expect(user.nome).toEqual('user1');
  });
  it('should throw a error with create a user with email if already exist', async () => {
    const data = {
      nome: 'user1',
      email: 'user@email.com',
      senha: '123',
      telefone: 92929372,
      idade: 12,
      peso: 85.0,
      etinia: 'branco',
    };

    await createUser.execute(data);

    await expect(createUser.execute(data)).rejects.toBeInstanceOf(Error);
  });
});
