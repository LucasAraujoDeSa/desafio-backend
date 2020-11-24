import Post from '../../../entities/Post';
import CreatePostDTO from '../../../useCases/Post/CreatePost/CreatePostDTO';

export default interface ICreatePostRepository {
  create(data: CreatePostDTO): Promise<Post>;
}
