import { Router } from 'express';
import CategoryController from '../controller/CategoryController';

const categoryController = new CategoryController();

const CategoryRoute = Router();

CategoryRoute.post('/', categoryController.create);

export default CategoryRoute;
