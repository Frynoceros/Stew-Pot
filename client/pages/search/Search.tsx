import React, {useState} from 'react';
import Recipe from './Recipe';
import PantryPopup from './PantryPopup';
import {Container, Button, Modal, Box, Grid} from '@mui/material';
import {IRecipe} from '../../types';

const Search = () => {
  const [recipeList, setRecipeList] = useState([]);

  // let recipeResults: IRecipe[] = [
  //   {
  //     key: 1,
  //     id: 1,
  //     name: 'ham and cheese',
  //     recipeUrl: 'hamandcheese.com',
  //     img: 'google.com',
  //     cuisine: 'american',
  //     ingredientList: 'ham, cheese, bread',
  //     cookTime: '5 min',
  //     servings: 1,
  //     accountId: 1,
  //     isFav: true,
  //   },
  //   {
  //     key: 2,
  //     id: 2,
  //     name: 'ham and cheese',
  //     recipeUrl: 'hamandcheese.com',
  //     img: 'google.com',
  //     cuisine: 'american',
  //     ingredientList: 'ham, cheese, bread',
  //     cookTime: '5 min',
  //     servings: 1,
  //     accountId: 1,
  //     isFav: false,
  //   },
  // ];

  // const recipes: React.ReactElement[] = recipeResults.map(el => {
  const recipes: any[] = recipeList.map((el) => {
    return (
      <Recipe
        key={el.id}
        id={el.id}
        name={el.title}
        recipeUrl={el.url}
        img={el.img}
        cuisine={el.cuisine}
        ingredientList={el.allIngredients}
        cookTime={el.readyIn}
        servings={el.servings}
        accountId={el.accountId}
        isFav={el.isFav}
      />
    );
  });

  //modal popup
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container id="search-page" maxWidth="xl">
      <Box id="button-box" sx={{textAlign: 'center'}} m={2} p={3}>
        <Button
          id="select-ingredients-btn"
          variant="contained"
          color="primary"
          onClick={handleOpen}
          sx={{height: 40, width: 450, p: 1, m: 2}}
        >
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
            setRecipeList={setRecipeList}
          />
        </Modal>
      </Box>

      <Grid
        id="recipe-box"
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        {recipes}
      </Grid>
    </Container>
  );
};

export default Search;
