// types for express req res next
import {Request, Response, NextFunction } from 'express'
// should we use request or request promise or axios? Axios has support going forwards, whereas request has been put into maintenance mode. 
// axios also supports async await, and has browser support. 
import express from 'express';
import { spoonController } from '../controllers/spoonacularControllers';
// Routes for the spoonacular recipe api

const webApiRouter = express.Router();
// ===
// GET
// ===
// get all recipes(that match request body)
webApiRouter.get('/recipes', spoonController, (req, res, next) => {
  res.status(200);
});

// get one recipe


