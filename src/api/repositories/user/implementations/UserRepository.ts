import { getRepository, Repository } from 'typeorm';
import IUserDTO from '../../../dtos/user/IUserDTO';
import User from '../../../entities/User';
import IUserRepository from '../IUserRepository';

export default class UserRepository implements IUserRepository {
  constructor(private ormRepository: Repository<User>) {
    this.ormRepository = getRepository(User);
  }

  public async create(data: IUserDTO): Promise<User> {
    const user = this.ormRepository.create(data);

    await this.ormRepository.save(user);

    return user;
  }

  public async list(): Promise<User[]> {
    const user = await this.ormRepository.find();

    return user;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);

    return user;
  }

  public async save(data: User): Promise<void> {
    await this.ormRepository.save(data);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user;
  }
}
