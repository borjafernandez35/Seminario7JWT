import { Router } from 'express';
const router = Router();

import { createReview, getReviews, getReview, deleteReview, updateReview } from '../controllers/review.controller'
import { verifyToken, byMe } from '../middlewares/authJWT'

router.route('/')
  .post([verifyToken], createReview)
  .get(getReviews)

router.route('/:id')
  .get(getReview)
  .delete([verifyToken, byMe], deleteReview)
  .put([verifyToken, byMe], updateReview)

export default router;