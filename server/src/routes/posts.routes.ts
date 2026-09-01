import { Router } from 'express';
import { asyncHandler } from '../middleware/asyncHandler';
import * as controller from '../controllers/posts.controller';

const router = Router();

// GET /api/posts?page=1&limit=10&circleId=c1&authorId=u1 -> PaginatedPosts
router.get('/', asyncHandler(controller.listPosts));

// GET /api/posts/:id -> Post
router.get('/:id', asyncHandler(controller.getPostById));

// POST /api/posts { content, imageUrl?, circleId?, authorId? } -> Post (201)
router.post('/', asyncHandler(controller.createPost));

// DELETE /api/posts/:id
router.delete('/:id', asyncHandler(controller.deletePost));

export default router;
