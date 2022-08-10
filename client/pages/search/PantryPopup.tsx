import React, { useState } from 'react';
import { Box, Typography, Button, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Protein, Fruit, Vegetables, Dairy, Other } from '../../assets/pantryIngredients';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const PantryPopup = (props) => {
  const {handleClose, setRecipeList} = props;

  const [searchParams, setSearchParams] = useState(new Set())

  const toggleCheckbox = (e) => {
    console.log(e.target.value)
    const newSet = new Set(JSON.parse(JSON.stringify([...searchParams])))
    if (e.target.checked) {
      newSet.add(e.target.value)
    } else {
      newSet.delete(e.target.value)
    }
    setSearchParams(newSet)
  }

  const clickSearch = () => {
    console.log([...searchParams])
    //fetch request
    fetch('/api/recipes', {
      method: 'POST',
      body: JSON.stringify([...searchParams]),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => {
        setRecipeList(data);
        handleClose();
      })
      .catch(err => console.log("Error in getRecipes fetch request:", err))
  }

  const renderProtein = Protein.map(el => {
    return(
      <div>
        <FormControlLabel control={<Checkbox onChange={toggleCheckbox} value={el}/>} label={el} />
      </div> 
    )
  })
  const renderFruit = Fruit.map(el => {
    return(
      <div>
        <FormControlLabel control={<Checkbox onChange={toggleCheckbox} value={el}/>} label={el} />
      </div> 
    )
  })
  const renderVegetables = Vegetables.map(el => {
    return(
      <div>
        <FormControlLabel control={<Checkbox onChange={toggleCheckbox} value={el}/>} label={el} />
      </div> 
    )
  })
  const renderDairy = Dairy.map(el => {
    return(
      <div>
        <FormControlLabel control={<Checkbox onChange={toggleCheckbox} value={el}/>} label={el} />
      </div> 
    )
  })
  const renderOther = Other.map(el => {
    return(
      <div>
        <FormControlLabel control={<Checkbox onChange={toggleCheckbox} value={el}/>} label={el} />
      </div> 
    )
  })

  return (
    <Box id="pantry-popup" sx={{...style, width: 800, height: 800, overflow: 'scroll'}}> 
      <CloseIcon onClick={handleClose}/>
      {/* <FormGroup sx={{ width: '800px', height: '660px', overflow: 'hidden' }}> */}
      <FormGroup >
        <Typography variant="h5" gutterBottom>Protein</Typography>
        {renderProtein}
        <Typography variant="h5" gutterBottom>Fruit</Typography>
        {renderFruit}
        <Typography variant="h5" gutterBottom>Vegetables</Typography>
        {renderVegetables}
        <Typography variant="h5" gutterBottom>Dairy</Typography>
        {renderDairy}
        <Typography variant="h5" gutterBottom>Other</Typography>
        {renderOther}
      </FormGroup>

      <Button id="search-btn" variant="contained" onClick={clickSearch} sx={{ height: 40, width: 140, p: 1, ml: 6 }}>
        Search
      </Button>
    </Box>
  )
}

export default PantryPopup;