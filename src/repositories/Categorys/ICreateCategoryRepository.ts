import Category from '../../entities/Category';
import CreateCategoryDto from '../../useCases/Categorys/CreateCategory/CreateCategoryDTO';

export default interface ICreateCategoryRepository {
  create(data: CreateCategoryDto): Promise<Category>;
}
