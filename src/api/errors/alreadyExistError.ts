export class AlreadyExistError extends Error {
  constructor(paramName: string) {
    super(`${paramName} aready exist`);
    this.name = paramName;
  }
}
