import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreatePostService from '../useCases/Post/CreatePost/CreatePostService';
import IndexPostService from '../useCases/Post/IndexPost/IndexPostService';

export default class PostController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { title, description, body, category_id } = req.body;

      const postService = container.resolve(CreatePostService);

      const post = await postService.execute({
        title,
        description,
        body,
        category_id,
      });

      return res.status(201).json(post);
    } catch (err) {
      return res.status(400).json({
        err: err.message,
      });
    }
  }

  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const postService = container.resolve(IndexPostService);

      const post = await postService.execute();

      return res.status(200).json(post);
    } catch (err) {
      return res.status(400).json({
        err: err.message,
      });
    }
  }
}
