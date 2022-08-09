import express, { Request, Response, NextFunction, RequestHandler } from 'express';

const favRouter = express.Router();

// Favorite Recipes
// ================

favRouter.route('/favorites')
  .get((req: Request, res: Response, next: NextFunction) => {

  })
  .post((req: Request, res: Response, next: NextFunction) => {

  })

favRouter.delete('/recipes:_id', (req: Request, res: Response, next: NextFunction) => {

});

export default favRouter;