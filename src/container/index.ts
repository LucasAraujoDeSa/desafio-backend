import { container } from 'tsyringe';

// create Category
import ICreateCategoryRepository from '../repositories/Categorys/ICreateCategoryRepository';
import CreateCategoryRepository from '../repositories/Categorys/implementations/CreateCategoryRepository';

// create Post
import ICreatePostRepository from '../repositories/Posts/create/ICreatePostRepository';
import CreatePostRepository from '../repositories/Posts/create/implementations/CreatePostRepository';

// Index post
import IIndexPostRepository from '../repositories/Posts/index/IIndexPostRepository';
import IndexPostRepository from '../repositories/Posts/index/implementations/IndexPostRepository';

// create Category Container
container.registerSingleton<ICreateCategoryRepository>(
  'CreateCategoryRepository',
  CreateCategoryRepository,
);

// create Post Container
container.registerSingleton<ICreatePostRepository>(
  'CreatePostRepository',
  CreatePostRepository,
);

// Index post Container
container.registerSingleton<IIndexPostRepository>(
  'IndexPostRepository',
  IndexPostRepository,
);
