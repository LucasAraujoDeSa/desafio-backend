import { hash, compare } from 'bcrypt';
import { IHashProvider } from '../HashProvider';

export class BcryptAdapter implements IHashProvider {
  public async hash(senha: string): Promise<string> {
    const hashPassword = await hash(senha, 10);

    return hashPassword;
  }

  public async compare(senha: string, hash: string): Promise<boolean> {
    const same = await compare(senha, hash);

    return same;
  }
}
