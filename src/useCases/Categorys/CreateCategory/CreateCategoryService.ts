import { inject, injectable } from 'tsyringe';
import Category from '../../../entities/Category';
import ICreateCategoryRepository from '../../../repositories/Categorys/ICreateCategoryRepository';

interface IRequest {
  name: string;
}

@injectable()
export default class CreateCategoryService {
  constructor(
    @inject('CreateCategoryRepository')
    private categoryRepository: ICreateCategoryRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<Category> {
    const category = await this.categoryRepository.create({ name });

    return category;
  }
}
