import { getRepository, Repository } from 'typeorm';
import Post from '../../../../entities/Post';
import IIndexPostRepository from '../IIndexPostRepository';

export default class IndexPostRepository implements IIndexPostRepository {
  private postRepository: Repository<Post>;

  constructor() {
    this.postRepository = getRepository(Post);
  }

  public async indexAll(): Promise<Post[]> {
    const post = await this.postRepository.find();

    return post;
  }
}
