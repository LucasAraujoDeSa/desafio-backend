import { getRepository, Repository } from 'typeorm';
import Category from '../../../entities/Category';
import CreateCategoryDto from '../../../useCases/Categorys/CreateCategory/CreateCategoryDTO';
import ICreateCategoryRepository from '../ICreateCategoryRepository';

export default class CreateCategoryRepository
  implements ICreateCategoryRepository {
  private categoryRepository: Repository<Category>;

  constructor() {
    this.categoryRepository = getRepository(Category);
  }

  public async create({ name }: CreateCategoryDto): Promise<Category> {
    const category = this.categoryRepository.create({ name });

    await this.categoryRepository.save(category);

    return category;
  }
}
