export interface IHashProvider {
  hash: (senha: string) => Promise<string>;
  compare: (senha: string, hash: string) => Promise<boolean>;
}
