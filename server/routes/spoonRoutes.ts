// types for express req res next
import {Request, Response, NextFunction} from 'express';
// should we use request or request promise or axios? Axios has support going forwards, whereas request has been put into maintenance mode.
// axios also supports async await, and has browser support.
import express from 'express';
import {spoonRecipeController} from '../controllers/spoonControllers';
// Routes for the spoonacular recipe api

const spoonRoutes = express.Router();

// get all recipes(that match request body)
spoonRoutes.post('/recipes', spoonRecipeController, (req, res, next) => {
  res.status(200).send(res.locals.recipes);
});

export default spoonRoutes;
