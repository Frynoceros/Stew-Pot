import express, { Request, Response, NextFunction, RequestHandler } from 'express';
 
const pantryRouter = express.Router();

pantryRouter.route('/pantry')
  .get((req: Request, res: Response, next: NextFunction) => {

}).post((req: Request, res: Response, next: NextFunction) => {

})


pantryRouter.put('/pantry/:_id', (req: Request, res: Response, next: NextFunction) => {

});


pantryRouter.delete('/pantry/:_id', (req: Request, res: Response, next: NextFunction) => {

});

export default pantryRouter;
