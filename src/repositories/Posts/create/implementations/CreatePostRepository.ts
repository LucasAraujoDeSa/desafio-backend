import { getRepository, Repository } from 'typeorm';
import Post from '../../../../entities/Post';
import CreatePostDTO from '../../../../useCases/Post/CreatePost/CreatePostDTO';
import ICreatePostRepository from '../ICreatePostRepository';

export default class CreatePostRepository implements ICreatePostRepository {
  private postRepository: Repository<Post>;

  constructor() {
    this.postRepository = getRepository(Post);
  }

  public async create(data: CreatePostDTO): Promise<Post> {
    const post = this.postRepository.create(data);

    await this.postRepository.save(post);

    return post;
  }
}
