import { inject, injectable } from 'tsyringe';
import Post from '../../../entities/Post';
import IndexPostRepository from '../../../repositories/Posts/index/implementations/IndexPostRepository';

@injectable()
export default class IndexPostService {
  constructor(
    @inject('IndexPostRepository') private postRepository: IndexPostRepository,
  ) {}

  public async execute(): Promise<Post[]> {
    const post = await this.postRepository.indexAll();

    return post;
  }
}
