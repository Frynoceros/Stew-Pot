import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from 'express';
import authController from '../controllers/authControllers';

const userRouter = express.Router();

userRouter.post('/signup', authController.signUp, (req, res) => {
  console.log('User Router - Signup');
  res.status(200).json(res.locals.userID);
});

userRouter.post('/login', authController.postLogin, (req, res) => {
  console.log('User Router - Login');
  res.status(200).json(res.locals.loggedIn);
});

userRouter.get('/login', authController.check, (req, res) => {
  console.log('User Router - Check');
  res.status(200).send('hello');
});

export default userRouter;
