import { Request, Response } from 'express'

import User from '../models/User';
import Review from '../models/reviews';

export async function createReview (req: Request, res: Response): Promise<Response> {
    const { id, autorRef, tittle, coment, valoration } = req.body;
    console.log('Creating user');
    const newReview = {
      id: id,
      autorRef: autorRef,
      tittle: tittle,
      comment: coment,
    valoration: valoration    }
    const review = new Review(newReview);
    await review.save();
    console.log(review);
  
    return res.json({
      message: "Review created",
      review
    });
  }
  
  export async function getReviews (req: Request, res: Response): Promise<Response> {
    console.log('Get reviews');
    const reviews = await Review.find();
    return res.json(reviews);
  }
  
  export async function getReview(req: Request, res: Response): Promise<Response> {
    console.log('Get review');
    const id = req.params.id;
    const review = await Review.findById(id);
    return res.json(review);
  }
  
  export async function deleteReview(req: Request, res: Response): Promise<Response> {
    console.log('Delete user');
    const id = req.params.id;
    const review = await Review.findByIdAndRemove(id);
    return res.json({
      message: "Review deleted",
      review
    });
  }
  
  export async function updateReview(req: Request, res: Response): Promise<Response> {
    console.log('Update user');
    const _id = req.params.id;
    const { id, autorRef, tittle, coment, valoration } = req.body;
    const review = await Review.findByIdAndUpdate(_id, {
      id,
   autorRef ,
      tittle,
      coment,
      valoration
    }, {new: true});
    return res.json({
      message: "Review updated",
      review
    });
  }