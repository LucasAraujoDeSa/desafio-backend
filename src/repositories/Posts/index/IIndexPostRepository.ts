import Post from '../../../entities/Post';

export default interface IIndexPostRepository {
  indexAll(data: Post): Promise<Post[] | undefined>;
}
