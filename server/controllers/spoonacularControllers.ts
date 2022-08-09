// types for express req res next
import {Request, Response, NextFunction, RequestHandler} from 'express';
import nodeFetch from 'node-fetch';

export const spoonController = (req: Request, res: Response, next: NextFunction) => {
    // get info on what to include in request from front end. 
    // can we send ingredients as array or set?
    const { ingredients, numRecipes, ranking, ignorePantry} = req.body;
    // string of ingredients in spoonacular api fetch syntax. 
    let ingredientString = '';
    // convert ingredients in req body into web api fetch syntax.
    ingredients.forEach((ingredient, index) => {
      (index !== ingredients.length-1) ? ingredientString += `${ingredient},+` : ingredientString += `${ingredient}`
    });

    fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientString}&number=${numRecipes}&${ranking}&${ignorePantry}`)
      .then((response) => {
        response.json();
      })
      .then((json) => {
        // >do stuff to filter here<
        res.locals.recipes = json;
        return next();
      }).catch((err) => {
        return next(err);
      });
    }
