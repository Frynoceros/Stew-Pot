import React, {useState} from 'react';
import {Grid, Paper, styled, ButtonBase, Typography, Icon} from '@mui/material';
import {Star, StarOutline, SvgIconComponent} from '@mui/icons-material';
import {IRecipe} from '../../types';
import {addPantryItem, removePantryItem} from '../../slices/pantrySlice';
import {useDispatch} from 'react-redux';
import Navbar from '../Navbar';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Recipe = (props: IRecipe) => {
  const dispatch = useDispatch();
  const {
    id,
    name,
    recipeUrl,
    img,
    cuisine,
    ingredientList,
    cookTime,
    servings,
    accountId,
  } = props;

  const [isFavorite, setIsFavorite] = useState<boolean>(true);
  // const [favButton, setFavButton] = useState<any>(<StarOutline/>);

  // let FavIcon;
  // if (isFav) {
  //   FavIcon = (
  //     <span className="favIcon">
  //       {/* <FAIcon
  //         onClick={() => favClicked(id)}
  //         icon={solidStar}
  //         style={{color: 'steelblue'}}
  //       /> */}
  //     </span>
  //   );
  // } else
  //   FavIcon = (
  //     <span className="favIcon">
  //       {/* <FAIcon onClick={() => favClicked(id)} icon={regStar} /> */}
  //     </span>
  //   );
  // set item to favorite
  const clickFavorite = (id: number) => {
    if (isFavorite) {
      setIsFavorite(false);
      // setFavButton(<StarOutline />);
      dispatch(
        addPantryItem({
          id,
          name,
          recipeUrl,
          img,
          cuisine,
          ingredientList,
          cookTime,
          servings,
          accountId,
        })
      );
    } else {
      setIsFavorite(true);
      // setFavButton(<Star />);
      dispatch(
        removePantryItem({
          id,
        })
      );
    }
  };

  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{width: 128, height: 128}}>
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
          {/* <Grid item>{favIcon}</Grid> */}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Recipe;
