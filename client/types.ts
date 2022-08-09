export interface IRecipe {
  id: number,
  name: string,
  recipeUrl: string 
  img: string, //url 
  cuisine: string,
  ingredientList: string, //'lime, salt, paprika'
  cookTime: string, //'45 min' or '1 hr and 15 min' 
  servings: number,
  accountId: number
}