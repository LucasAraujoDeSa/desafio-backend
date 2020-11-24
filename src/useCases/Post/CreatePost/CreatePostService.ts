import { inject, injectable } from 'tsyringe';
import Post from '../../../entities/Post';
import ICreatePostRepository from '../../../repositories/Posts/create/ICreatePostRepository';

interface IRequest {
  title: string;
  description: string;
  body: string;
  category_id: string;
}

@injectable()
export default class CreatePostService {
  constructor(
    @inject('CreatePostRepository')
    private postRepository: ICreatePostRepository,
  ) {}

  public async execute({
    title,
    description,
    body,
    category_id,
  }: IRequest): Promise<Post> {
    const post = await this.postRepository.create({
      title,
      description,
      body,
      category_id,
    });

    return post;
  }
}
