// types for express req res next
import {Request, Response, NextFunction} from 'express';
// should we use request or request promise or axios? Axios has support going forwards, whereas request has been put into maintenance mode.
// axios also supports async await, and has browser support.
import express from 'express';
// import spoonacularRoutes from '../controllers/spoonacularControllers'

// Routes for the spoonacular recipe api

const router = express.Router();
// ===
// GET
// ===
// get all recipes(that match request body)
router.get('/recipes', (req: Request, res: Response, next: NextFunction) => {});

// get one recipe
