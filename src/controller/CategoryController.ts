import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCategoryService from '../useCases/Categorys/CreateCategory/CreateCategoryService';

export default class CategoryController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name } = req.body;

      const categoryService = container.resolve(CreateCategoryService);

      const category = await categoryService.execute({ name });

      return res.status(201).json(category);
    } catch (err) {
      return res.status(400).json({
        err: err.message,
      });
    }
  }
}
