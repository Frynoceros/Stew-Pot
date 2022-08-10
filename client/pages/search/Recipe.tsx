import React, { useState, useEffect } from 'react';
import { Grid, Paper, styled, ButtonBase, Typography, Icon, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IRecipe } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';

import  { addFavorite, removeFavorite } from '../../slices/favoriteSlice';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Recipe = (props: IRecipe) => {
  const dispatch = useDispatch();
  const favorites = useSelector((store: RootState) => store.favorites);
  console.log(favorites);
  // const recipes = useSelector(store => store.recipes);
  const { id, name, recipeUrl, img, cuisine, ingredientList, cookTime, servings, accountId } = props;

  const [isFav, setFav] = useState<boolean>(false);

  const handleClick = (id: number) => {
    // console.log(isFav, iconColor, id)
    setFav(!isFav); 
  }

  // favClicked(charId) {
  //   let method = 'POST';
  //   if (this.props.favs
  //     && this.props.favs[charId]) method = 'DELETE';
  //   fetch(`/api/favs/${charId}`, {
  //     method,
  //     body: JSON.stringify({ id: charId }),
  //     headers: { 'Content-Type': 'application/json' },
  //   })
  //     .then(res => res.json())
  //     .then(({ favs }) => this.props.updateFavs(favs))
  //     .catch(err => console.log('favClicked: ERROR: ', err));
  // }

  //toggles color of favicon
  //dispatch action to update favorite state
  //sends post request to database to update favorites
  let iconColor;
  useEffect(() => {
    if(isFav){
      iconColor = "red"
      dispatch(addFavorite({ 
        id
      }));
    } else {
      iconColor = "grey"; 
      dispatch(removeFavorite({ 
        id
      }));
    }
  }, [isFav]);

  return (
    <Paper
      sx={{
        p: 2,
        margin: 2,
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={img} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                <a href={recipeUrl}>{name}</a>
              </Typography>
              <Typography variant="body2" gutterBottom>
                Time to Prepare: {cookTime} 
              </Typography>
              <Typography variant="body2" gutterBottom>
                Servings: {servings} 
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ingredients: {ingredientList}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <IconButton onClick={() => handleClick(id)}>
              <FavoriteIcon style={ isFav ? {color: "red"} : {color: "gray"} }/>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Recipe;

