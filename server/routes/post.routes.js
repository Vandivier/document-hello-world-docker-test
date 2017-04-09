import { Router } from 'express';
import * as PostController from '../controllers/post.controller';
const expressRouter = new Router();

// Get all Posts
expressRouter.route('/posts').get(PostController.getPosts);

// Get one post by cuid
expressRouter.route('/posts/:cuid').get(PostController.getPost);

// Add a new Post
expressRouter.route('/posts').post(PostController.addPost);

// Delete a post by cuid
expressRouter.route('/posts/:cuid').delete(PostController.deletePost);

export default expressRouter;
