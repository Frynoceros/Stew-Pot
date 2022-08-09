// types for express req res next
import {Request, Response, NextFunction } from 'express';

module.exports = {
// ===
// GET
// ===
  getAllRecipes(req: Request, res: Response, next: NextFunction) {
    const { recipes } = req.body;

  },

  getOneRecipe(req: Request, res: Response, next: NextFunction) {
  }
}