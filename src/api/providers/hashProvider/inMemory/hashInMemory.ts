import { IHashProvider } from '../HashProvider';

export class HashInMemory implements IHashProvider {
  public async hash(senha: string): Promise<string> {
    return senha;
  }

  public async compare(senha: string, hash: string): Promise<boolean> {
    if (senha !== hash) {
      return false;
    }
    return true;
  }
}
