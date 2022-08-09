import React, {useState} from 'react';
import Recipe from './Recipe';
// import PantryPopup from './PantryPopup';
import {Container, Button} from '@mui/material';
import {IRecipe} from '../../types';

const Search = () => {
  // let recipeResults; //should this be state?

  // const recipes: IRecipe[] = recipeResults.map(el => {
  //   <Recipe
  //     id={recipeResults.id}
  //     name = {recipeResults.name}
  //     recipeUrl={recipeResults.recipeUrl}
  //     img={recipeResults.img}
  //     cuisine={recipeResults.cuisine}
  //     ingredientList={recipeResults.ingredientList}
  //     cookTime={recipeResults.cookTime}
  //     servings={recipeResults.servings}
  //     accountId={recipeResults.accountId}
  //   />
  // })

  const [isPopupOpen, setPopup] = useState<boolean>(false);

  const clickSearch = () => {
    //fetch request
  };

  const togglePantry = (e) => {
    //brings up popup, toggles state
    setPopup(!isPopupOpen);
  };

  return (
    <Container id="search-page" maxWidth="lg">
      <Button
        id="select-ingredients-btn"
        variant="outlined"
        onClick={(e) => togglePantry(e)}
      >
        Click Here to Select Ingredients
      </Button>
      {/* {isPopupOpen && <PantryPopup />} */}
      <Button id="search-btn" variant="contained" onClick={clickSearch}>
        Search
      </Button>
      <Container id="recipe-box">{/* {recipes} */}</Container>
      {/* <h1  style={{ backgroundColor: '#cfe8fc'}}>
        Container Of maxWidth = lg 
      </h1> */}
    </Container>
  );
};

export default Search;
