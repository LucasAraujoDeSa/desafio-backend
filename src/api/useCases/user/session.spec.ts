import { NotExistError } from '../../errors/notExistError';
import { HashInMemory } from '../../providers/hashProvider/inMemory/hashInMemory';
import UserInMemory from '../../repositories/user/inMemory/userInMemory';
import { userValidationGroup } from '../../validators/userValidations/userValidationGroup';

import CreateUser from './create_user';
import { Session } from './session';

describe('authenticate user', () => {
  let userInMemory: UserInMemory;
  let createUser: CreateUser;
  let hashProvider: HashInMemory;
  let session: Session;
  beforeEach(() => {
    userInMemory = new UserInMemory();
    hashProvider = new HashInMemory();
    session = new Session(userInMemory, hashProvider);
    createUser = new CreateUser(
      userInMemory,
      hashProvider,
      userValidationGroup,
    );
  });
  it('should authenticate a user', async () => {
    await createUser.execute({
      nome: 'user1',
      email: 'user@email.com',
      senha: '123',
      telefone: 92929372,
      idade: 12,
      peso: 85.0,
      etinia: 'branco',
    });

    const user = await session.execute({
      email: 'user@email.com',
      senha: '123',
    });

    expect(user).toHaveProperty('token');
  });

  it('should throw a Error if user no exist', async () => {
    expect(
      session.execute({
        email: 'user@email.com',
        senha: '123',
      }),
    ).rejects.toBeInstanceOf(NotExistError);
  });

  it('should throw a Error if password compare return false', async () => {
    await createUser.execute({
      nome: 'user1',
      email: 'user@email.com',
      senha: '123',
      telefone: 92929372,
      idade: 12,
      peso: 85.0,
      etinia: 'branco',
    });

    expect(
      session.execute({
        email: 'user@email.com',
        senha: '12',
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
