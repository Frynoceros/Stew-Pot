import React, { useState } from 'react';
import Recipe from './Recipe';
import PantryPopup from './PantryPopup';
import { Container, Button, Modal, withStyles } from '@mui/material';
import { IRecipe } from '../../types';

const Search = () => {

  let recipeResults: IRecipe[] = [
    {
      id: 1,
      name: "ham and cheese",
      recipeUrl:"hamandcheese.com",
      img: "google.com",
      cuisine: "american",
      ingredientList: "ham, cheese, bread",
      cookTime: "5 min",
      servings: 1,
      accountId: 1
    },
    {
      id: 2,
      name: "ham and cheese",
      recipeUrl:"hamandcheese.com",
      img: "google.com",
      cuisine: "american",
      ingredientList: "ham, cheese, bread",
      cookTime: "5 min",
      servings: 1,
      accountId: 1
    }
  ]

  // const recipes: React.ReactElement[] = recipeResults.map(el => {
  const recipes: any[] = recipeResults.map(el => {
    return(
      <Recipe 
        id={el.id}
        name={el.name}
        recipeUrl={el.recipeUrl}
        img={el.img}
        cuisine={el.cuisine}
        ingredientList={el.ingredientList}
        cookTime={el.cookTime}
        servings={el.servings}
        accountId={el.accountId}
      />
    )
  })
  
  const clickSearch = () => {
    const body = {
      ingredients: ['apple', 'orange']
    }

    //fetch request
    fetch('http://localhost:3000/getRecipes', {
      method: "post",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log("Error in getRecipes fetch request:", err))
  }

  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container id="search-page" maxWidth="xl">
      <Button id="select-ingredients-btn" variant="contained" color="primary" onClick={handleOpen}>
        Click Here to Select Ingredients
      </Button>
      
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        hideBackdrop
        open={open}
        onClose={handleClose}
      >
        <PantryPopup 
          handleClose={handleClose}
        />
      </Modal>
        
      <Button id="search-btn" variant="contained" onClick={clickSearch}>'
        Search
      </Button>

      <Container id="recipe-box" maxWidth="lg">
        {recipes}
      </Container>
    </Container>
  )
}

export default Search;