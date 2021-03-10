import { NotExistError } from '../../errors/notExistError';
import { HashInMemory } from '../../providers/hashProvider/inMemory/hashInMemory';
import UserInMemory from '../../repositories/user/inMemory/userInMemory';
import { userValidationGroup } from '../../validators/userValidations/userValidationGroup';

import CreateUser from './create_user';
import { ShowUser } from './show_user';

describe('show user', () => {
  let userInMemory: UserInMemory;
  let createUser: CreateUser;
  let hashProvider: HashInMemory;
  let showUser: ShowUser;
  beforeEach(() => {
    userInMemory = new UserInMemory();
    hashProvider = new HashInMemory();
    createUser = new CreateUser(
      userInMemory,
      hashProvider,
      userValidationGroup,
    );
    showUser = new ShowUser(userInMemory);
  });
  it('should return a user', async () => {
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
  it('should return a error if user not exist', async () => {
    expect(showUser.execute('q12ed')).rejects.toBeInstanceOf(NotExistError);
  });
});
