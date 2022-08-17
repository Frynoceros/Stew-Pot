import React, {useState} from 'react';
import Recipe from './Recipe';
import PantryPopup from './PantryPopup';
import {Container, Button, Modal, Box, Grid} from '@mui/material';
import Navbar from '../Navbar';
import {IRecipe} from '../../types';

const Search = () => {
  const [recipeList, setRecipeList] = useState([]);

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
    <div>
      <Navbar />
      <Container id="search-page" maxWidth="xl">
        <Box id="button-box" sx={{textAlign: 'center'}} m={2} p={3}>
          <Button
            id="select-ingredients-btn"
            variant="contained"
            color="primary"
            onClick={handleOpen}
            sx={{height: 40, width: 600, p: 1, m: 2}}
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
    </div>
  );
};

export default Search;
