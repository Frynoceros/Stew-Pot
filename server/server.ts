import express, { Request, Response, NextFunction, RequestHandler } from 'express';
import path from 'path';
import pantryRoutes from './routes/pantryRoutes';
import favRoutes from './routes/favRoutes';
import userRoutes from './routes/userRoutes';
import spoonRoutes from './routes/spoonRoutes';
import { ServerError } from './types';

const app = express();

// body parser for static files.
app.use(express.json());

// db routes
app.use('/api', pantryRoutes);
app.use('/api', favRoutes);
app.use('/api', userRoutes);

// spoonacular routes
app.use('/api', spoonRoutes);


app.use('/', (err:ServerError, req:Request, res:Response, next:NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
})

app.listen(3000, () => console.log('server is listening on port 3000'));
