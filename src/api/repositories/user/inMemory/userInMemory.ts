import { v4 } from 'uuid';
import IUserDTO from '../../../useCases/user/dtos/IUserDTO';
import User from '../../../entities/User';
import IUserRepository from '../IUserRepository';

export default class UserInMemory implements IUserRepository {
  private users: User[] = [];

  public async create({
    nome,
    email,
    senha,
    telefone,
    idade,
    peso,
    etinia,
  }: IUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, {
      id: v4(),
      nome,
      email,
      senha,
      telefone,
      idade,
      peso,
      etinia,
    });

    this.users.push(user);

    return user;
  }

  public async list(): Promise<User[]> {
    return this.users;
  }

  public async delete(id: string): Promise<void> {
    const index = Number(id);
    this.users.splice(index, 1);
  }

  public async findById(id: string): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  public async save(data: User): Promise<void> {
    const findUser = this.users.findIndex(user => user.id === data.id);

    this.users[findUser] = data;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.email === email);

    return findUser;
  }
}
