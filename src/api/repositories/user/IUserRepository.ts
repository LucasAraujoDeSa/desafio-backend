import IUserDTO from '../../dtos/user/IUserDTO';
import User from '../../entities/User';

export default interface IUserRepository {
  create(data: IUserDTO): Promise<User>;
  list(): Promise<User[]>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<User | undefined>;
  save(data: User): Promise<void>;
  findByEmail(email: string): Promise<User | undefined>;
}
